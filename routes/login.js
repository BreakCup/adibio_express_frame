var express = require('express');
var login = express.Router();

login.get('/', function(req, res) {
  res.render('login', { title: 'Express' });
});
login.post('/',function(req,res){
	//处理登录密码名字
	console.log("get post:\n");
	
});
module.exports = login;