module.exports = function(repo) {

	var express = require('express');
	var router = express.Router();

	/* GET users listing. */
	router.get('/', function(req, res, next) {
	  res.send('respond with a resource');
	});

	router.get('/series', function(req, res, next) {
		repo.getAllSeries(function(data, err) {
			if (err) {
				res.json(err);
				return;
			}
			res.json(data);
		});
	});

	return router;
}