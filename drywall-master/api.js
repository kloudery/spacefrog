var express = require('express');
var router = express.Router();
var prices = require('./config/options.json');

/* GET price. */
router.get('/v1/pricing/:product', function(req, res, next) {
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