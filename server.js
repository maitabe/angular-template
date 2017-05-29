var express = require('express');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');

/*mongoose.connect('mongodb://localhost/nameDB');

var routes = require('./routes/index');
var users = require('./routes/users');*/

var app = express();

//populate the req.body with the data that we're sending from the client.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// public access from client-side
app.use(express.static('public'));
app.use(express.static('node_modules'));

/*app.use('/', routes);
app.use('/users', users);*/

//api's or entry point to access the data

//"get" data
app.get('/address', function(req, res, next) {

})

//add new data
app.post('/address', function(req, res, next) {

})

// update a pre-existing item.
app.put('/address', function(req, res, next) {

})

//delete something
app.delete('/address', function(req, res, next) {

})
var port = process.env.PORT || '4001';

app.listen(port, function() {
	console.log('server is up');
});