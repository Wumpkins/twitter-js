var express = require ('express');
var morgan = require('morgan');
var routes = require('./public/routes/');

var app = express();

var swig = require('swig');

app.use('/', routes);

app.use(express.static(__dirname + '/public'));

swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');

app.use(morgan('dev'));


var server = app.listen(3000, function(){

	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
})