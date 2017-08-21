var express = require('express');
var login = express.Router();

login.get('/', function(req, res) {
  res.render('login', { title: 'Express' });
});
login.post('/',function(req,res){
	conselo.log("get post:\n");
	conselo.log(req,res);
});
module.exports = login;