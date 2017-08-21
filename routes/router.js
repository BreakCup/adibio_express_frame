
module.exports = { router:function(app){
	app.use('/',require('/routes/login'));
	app.use('/index', require('/routes/index'));
	app.use('/users', require('/routes/users'));
}
}

