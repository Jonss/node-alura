var app = require('./config/express')();

app.get("/produtos", function(req, resp) {
	resp.render("produtos/lista");
});

app.listen(3000, function() {
	console.log("servidor rodando!");
});