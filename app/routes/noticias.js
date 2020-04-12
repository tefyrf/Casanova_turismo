//var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

	app.get('/noticias', function(req, res){

		//Essa referencia recupera o módulo que estabelece conexão com o banco de dados;
		var connection = app.config.dbConnection();

		// parametros esperados pela query
		// connection.query(sql, func callback);
		connection.query('select * from noticias', function(error, result){
			res.render("noticias/noticias", {noticias : result});
		});
		
		});
}