'use strict';

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('distribution', {title: 'distribution'});
});

module.exports = router;
