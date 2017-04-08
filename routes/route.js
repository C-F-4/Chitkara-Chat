var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

app.get('/index', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

module.exports = router;