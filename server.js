var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
// var mongoose = require('mongoose');

/*mongoose.connect('mongodb://localhost/nameDB');

var routes = require('./routes/index');
var users = require('./routes/users');*/

var app = express();

//populate the req.body with the data that we're sending from the client.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use(express.static('node_modules'));

/*app.use('/', routes);
app.use('/users', users);*/

//if data is an obj
// var someName = {};

// if data come in arr

var someName = null;


//get api third party
request('http://jsonplaceholder.typicode.com/users', function(error, response, body) {

	var dataInArr;
	//if body comes as a string we need to parse
	if(typeof body === 'string') {
		dataInArr = JSON.parse(body);
	}

	console.log(dataInArr);
	someName = dataInArr;
	/*if data inside object
	dataInObj = JSON.parse(body);*/

});

app.get('/somename', function(req, res, next) {
	console.log('/somename');

	if(someName != null){
		res.json(someName);
	}else{
		res.send('there is no data available at this moment');
	}

});



var port = process.env.PORT || '8000';

app.listen(port, function() {
	console.log('server is up', 8000);
});



