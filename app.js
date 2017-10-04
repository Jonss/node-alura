var app = require('express')();
app.set('view engine', 'ejs');

app.get("/produtos", function(req, resp) {
	//response.send("<h1>Lista de produtos</h1>");
	resp.render("produtos/lista");
});


app.listen(3000, function() {
	console.log("servidor rodando!");
});