var express = require('express');
var login = express.Router();

login.get('/', function(req, res) {
  res.render('login', { title: 'Express' });
});

module.exports = login;