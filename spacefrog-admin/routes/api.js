var express = require('express');
var router = express.Router();
var prices = require('../configs/options.json');
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
    res.send(JSON.stringify(charge));
});

/* GET price. */
router.get('/v1/pricing/:product', function(req, res, next) {

    var priceObject = {
        "description": "",
        "price": 0,
        "title": "",
        "options": {}
    };

    var product = req.params.product;
    if (product && prices[product]) {
        priceObject.title = prices[product].title;
        priceObject.price = prices[product].price;
        if (prices[product].description) {
            priceObject.description = prices[product].description;
        }
    }
    res.status(200);
    res.header('Content-type', 'application/json');
    res.send(JSON.stringify(priceObject));
});

module.exports = router;
