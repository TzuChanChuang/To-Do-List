var express = require('express');
var router = express.Router();
var Item = require('../model/item.js').Item;



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add', function(req, res, next) {
	var todo = req.body.addItem;
	todo.save(function (err, todo) {
		if (err) return console.error(err);
	});
});

router.post('id/done', function(req, res, next) {
  //do something
});

router.post('id/del', function(req, res, next) {
  //do something
});

router.post('id/rec', function(req, res, next) {
  //do something
});




module.exports = router;
