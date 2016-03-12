var express = require("express");
var mongojs = require('mongojs');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port = 3000;
var db = mongojs('ecommerce', ['products']);
var objectId = mongojs.objectId;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname +'/public'));

app.post('/api/products', function(req, res, next) {
	console.log('post');
	db.products.insert(req.body, function(err, response) {
		return res.status(200).json(response);
	});
});

app.get('/api/products', function(req, res, next) {
	console.log('get');
	db.products.find(req.query, function(err, response) {
		if(err) {
			res.status(500).json(err);
		} else {
			res.json(response);
			console.log(response);
		}
	});
})
app.get("/api/products/:id", function(req, res, next) {
	var idObj = {
		name: req.params.id
	};
	console.log(idObj);
	db.products.findOne(idObj, function(err, response) {
		if(err) {
			res.status(500).json(err);
		} else {
			res.json(response);
		}
	});
});

app.put('/api/products/:id', function(req, res, next) {
	console.log('put');
	if(!req.params.id) {
		return res.status(400).send('id query needed');
	}
	var query = {
		_id: mongojs.ObjectId(req.params.id)
	};
	db.products.update(query, req.body, function(err, response) {
		if(err) {
			return res.status(500).json(err);
		} else {
			return res.json(response);
		}
	})
})

app.delete('/api/products/:id', function(req, res, next) {
	console.log('delete');
	if(!req.params.id) {
		return res.status(400).send('id query needed');
	}
	var query = {
		_id: mongojs.ObjectId(req.params.id) 
	};
	db.products.remove(query, function(err, response) {
		if(err) {
			return res.status(500).json(err);
		} else {
			return res.json(response);
		}
	});
});

app.listen(port, function() {
	console.log("I'm listening");
})