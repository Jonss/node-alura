module.exports = function(app) {
	app.get("/produtos", function(req, resp) {
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);

		produtosDAO.lista(function(erros,resultados){
			resp.format({
				html: function() {
					resp.render('produtos/lista',{lista:resultados});
				},
				json: function() {
					resp.json(resultados);
				}
			});
       	});
		connection.end();
	});

	app.get("/produtos/form", function(req, res) {
		res.render('produtos/form', {erros:{}, produto:{}});
	});

		app.post('/produtos', function(req, res) {
			
			var produto = req.body;
			console.log(produto);

			req.assert('titulo', 'Título não pode ser vazio').notEmpty();
			req.assert('preco', 'Preço precisa ser um decimal').isFloat();

			var erros = req.validationErrors();

			if(erros){
				console.log(erros)
				res.render('produtos/form', {erros:erros, produto:produto});
				return;
			}

			var connection = app.infra.connectionFactory();
			var produtosDAO = new app.infra.ProdutosDAO(connection);

			produtosDAO.salva(produto,function(err, result){
				res.redirect('/produtos');
			});

			connection.end();
		});

}


