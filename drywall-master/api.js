var express = require('express');
var router = express.Router();
var prices = require('./config/options.json');
var stripe = require('stripe')('sk_test_4MT0bUTP1x2a32P9TpkxuXQi');

/* Charge through Stripe */
router.get('/v1/purchase/:product', function(req, res, next) {
    var stripeToken = req.body.stripeToken;
    var charge = stripe.charges.create({
        amount: 0,
        currency: "usd",
        source: stripeToken,
        description: "Example charge"
    }, function(err, charge) {
        if (err && err.type === 'StripeCardError') {
            // The card has been declined
        }
    });

    res.status(200);
    res.header('Content-type', 'application/json');
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,accept,access_token,X-Requested-With');
    res.send(JSON.stringify(charge));
});

/* GET price. */
router.get('/v1/pricing/:product', function(req, res, next) {
    console.log("pricing");
    res.header('Content-type', 'application/json');

    var priceObject = {
        "description": "",
        "price": 0,
        "title": "",
        "options": {}
    };

    var product = req.params.product;

    if (product && prices[product]) {
        res.status(200);
        res.header('Content-type', 'application/json');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type,accept,access_token,X-Requested-With');
        res.send(JSON.stringify(prices[product]));
    } else {
        res.status(500);
        res.send('{"error":"product not found"}');
    }

});

module.exports = router;
