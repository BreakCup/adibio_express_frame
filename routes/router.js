
module.exports = function(app){
	app.use('/',require('./login'));
	app.use('/index', require('./index'));
	app.use('/users', require('./users'));
}


