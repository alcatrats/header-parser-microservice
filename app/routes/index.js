'use strict';

var path = process.cwd();
var ParserHandler = require(path + '/app/controllers/parserHandler.server.js');

module.exports = function (app) {
	var parserHandler = new ParserHandler();
	
	app.route('/')
		.get(function(req, res) {
			res.sendFile(path + '/public/index.html');
		});
		
	app.route('/api/whoami/')
		.get(parserHandler.getInfo);
};
