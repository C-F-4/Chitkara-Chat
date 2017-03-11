var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

app.use('/public', express.static(path.join(__dirname, '../public')));

router.get('/', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

router.get('/index', function(req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
});

module.exports = router;