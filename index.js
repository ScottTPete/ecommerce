var express = require("express");
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port = 3000;
var db = mongojs('');
var collection = db.collection('');
var objectId = mongojs.objectId;

app.use(bodyParser.json());

app.post('/products', function(req, res, next) {
	console.log('post');
});

app.get('/products', function(req, res, next) {
	console.log('get');
})

app.get('/products/:id', function(req, res, next) {
	console.log("get numero dos");
})

app.put('/products/:id', function(req, res, next) {
	console.log('put');
})

app.delete('/products/:id', function(req, res, next) {
	console.log('delete');
})

app.listen(port, function() {
	console.log("I'm listening");
})