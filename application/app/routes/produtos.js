module.exports = function(app) {
	app.get("/produtos", function(req, resp) {
		var connection = app.infra.connectionFactory();
		var produtosBanco = app.infra.produtosBanco;

		produtosBanco.lista(connection, function(erros,resultados){
            resp.render('produtos/lista',{lista:resultados});
       	});

		connection.end();
	});	
}


