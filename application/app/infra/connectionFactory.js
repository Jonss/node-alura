var mysql = require('mysql');

function createDbConnection() {
	return mysql.createConnection({
		host: process.env.ENV_DB_HOST,
		user: process.env.ENV_DB_USER,
		password: process.env.ENV_DB_PASSWORD,
		database: process.env.ENV_DB_DATABASE
	});
}

module.exports = function() {
	return createDbConnection;
}