/**
 * Created by nico on 14.12.15.
 */
var http = require('http');
var request = require('request');
var reviewParser = require('./review-parser.js');

//var server = http.createServer(function(req, res) {
//
//    var url = 'http://www.amazon.de/product-reviews/B00EPFV6PO/ref=cm_cr_pr_paging_btm_next_3?ie=UTF8&showViewpoints=1&sortBy=byRankDescending&pageNumber=1';
//    var res_body;
//
//    request(url, function(error, response, body) {
//        parseReviews(body);
//    });
//
//    res.writeHead(200);
//    res.end('Hello Http');
//
//    function parseReviews(res_body) {
//
//    }
//});
//server.listen(8080);

reviewParser.getReviewsForProductId('B00EPFV6PO').then(function(val) {
    console.log("final reviews: ",val);
}).catch(function(reason) {
    console.error(reason);
});
