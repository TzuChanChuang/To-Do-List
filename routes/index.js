var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add', function(req, res, next) {
  //do something
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
