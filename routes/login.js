var express = require('express');
var login = express.Router();

login.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = login;