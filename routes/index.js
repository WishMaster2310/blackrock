var express = require('express');
var router = express.Router();
var siteDB = require('../datasource/sdata.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { ctx: siteDB})
});

router.get('/about', function(req, res, next) {
  res.render('about', { ctx: siteDB})
});


module.exports = router;
