module.exports = function(app) {
	app.get("/produtos", function(req, resp) {
		resp.render("produtos/lista");
	});	
}


