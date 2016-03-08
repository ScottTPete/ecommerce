var express = require("express");
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port = 3000;
var db = mongojs('ecommerce');
var collection = db.collection('products');
var objectId = mongojs.objectId;

app.use(bodyParser.json());

app.post('/products', function(req, res, next) {
	console.log('post');
	collection.insert(req.body, function(err, response) {
		return res.status(200).send(response);
	});
});

app.get('/products', function(req, res, next) {
	console.log('get');
	collection.find({{}})
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