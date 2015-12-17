/**
 * Created by nico on 14.12.15.
 */
var express = require('express'),
    reviewParser = require('./review-parser.js'),
    server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080,
    server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var app = express();
app.set('ipaddress', server_ip_address);

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

app.listen(server_port);



