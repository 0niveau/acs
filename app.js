/**
 * Created by nico on 14.12.15.
 */
var express = require('express');
var reviewParser = require('./review-parser.js');

var app = express();

app.get('/', function (req, res){
    console.log(req.query.productId);

    reviewParser.getReviewsForProductId(req.query.productId).then(function(val) {
        console.log("got reviews ready for shipping");
        res.send(val);
        res.end();
    }).catch(function(reason) {
        console.error(reason);
        res.end("shit happens");
    });
});

app.listen(8080);



