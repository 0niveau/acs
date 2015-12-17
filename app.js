/**
 * Created by nico on 14.12.15.
 */
var http = require('http');
var express = require('express');
var request = require('request');
var reviewParser = require('./review-parser.js');

var app = express();

app.get('/', function (req, res){
    console.log(req.query.productId);

    reviewParser.getReviewsForProductId(req.query.productId).then(function(val) {
        console.log("final reviews: ",val);

        res.send(val);
        res.end();
    }).catch(function(reason) {
        console.error(reason);
        res.end("shit happens");
    });
});

app.listen(8080);

//reviewParser.getReviewsForProductId('BJKDO').then(function(val) {
//    console.log("final reviews: ",val);
//}).catch(function(reason) {
//    console.error(reason);
//});



