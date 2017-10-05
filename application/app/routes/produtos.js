module.exports = function(app) {
	app.get("/produtos", function(req, resp) {

		var connection = app.infra.connectionFactory();

		connection.query('select * from produtos', function(err, result) {
			if(err){
				console.log(err)
			}
			resp.render("produtos/lista", {lista:result})
		});

		connection.end();
	});	
}


