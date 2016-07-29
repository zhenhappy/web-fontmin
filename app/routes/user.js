'use strict';

var express = require('express');
var router = express.Router();

/* GET Welcome Page. */
router.get('/', function(req, res, next) {
  res.render('user');
});

module.exports = router;
