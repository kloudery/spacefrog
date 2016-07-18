var express = require('express');
var router = express.Router();
var prices = require('../configs/options.json');


/* GET price. */
router.get('/v1/pricing/:product', function(req, res, next) {
    res.header('Content-type', 'application/json');

    var priceObject = {
        "description":"",
        "price":0,
        "title":"",
        "options": {}
    };

    var product = req.params.product;

    if(product && prices[product]) {
        res.status(200);
        res.send(JSON.stringify(prices[product]));
    } else {
        res.status(500);
        res.send('{"error":"product not found"}');
    }

});

module.exports = router;
