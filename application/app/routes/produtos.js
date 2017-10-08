module.exports = function(app) {
	app.get("/produtos", function(req, resp) {
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(erros,resultados){
            resp.render('produtos/lista',{lista:resultados});
       	});

		connection.end();
	});

	app.get("/produtos/form", function(req, res) {
		res.render('produtos/form')
	});

	app.post('/produtos', function(req, res) {
		
		var produto = req.body;

		console.log(produto);

		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.salva(produto,function(err, result){
			res.redirect('/produtos');
		});

		connection.end();
	});

}


