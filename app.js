var express = require ('express');
var morgan = require('morgan');
var routes = require('./public/routes/');
var bodyParser = require('body-parser');
var swig = require('swig');
var socketio = require('socket.io');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

var server = app.listen(3000)

var io = socketio.listen(server);

app.use('/', routes(io));

app.use(express.static(__dirname + '/public'));

swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');

app.use(morgan('dev'));


