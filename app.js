var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
//var passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;
//var mongo = require('mongodb');
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/cchat');
//var db = mongoose.connection;
var app = express();
const port = process.env.PORT || 8000;

var routes = require('./routes/route.js');
app.use('/', routes);

//app.set('views', path.join(__dirname, 'views'));
//app.engine('handlebars');

app.listen(port, function() {
    console.log("Server is listening on Port: " + port);
});