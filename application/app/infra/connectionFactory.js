var mysql = require('mysql');

module.exports = function() {
	return mysql.createConnection({
		host: process.env.ENV_DB_HOST,
		user: process.env.ENV_DB_USER,
		password: process.env.ENV_DB_PASSWORD,
		database: process.env.ENV_DB_DATABASE
	});
}
