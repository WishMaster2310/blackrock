var express = require('express');
var router = express.Router();
var siteDB = require('../datasource/sdata.json');
siteDB.static_path = "..";
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { ctx: siteDB})
});

router.get('/about', function(req, res, next) {
  res.render('about', { ctx: siteDB})
});

router.get('/rent', function(req, res, next) {
  res.render('rent', { ctx: siteDB})
});

router.get('/odnojetazhnye_doma', function(req, res, next) {
  res.render('odnojetazhnye_doma', { ctx: siteDB})
});

router.get('/banja_odnojetazhnaja', function(req, res, next) {
  res.render('banja_odnojetazhnaja', { ctx: siteDB})
});
router.get('/kottedzhi', function(req, res, next) {
  res.render('kottedzhi', { ctx: siteDB})
});

router.get('/bani_s_biljardom', function(req, res, next) {
  res.render('bani_s_biljardom', { ctx: siteDB})
});

router.get('/contacts', function(req, res, next) {
  res.render('contacts', { ctx: siteDB})
});
module.exports = router;
