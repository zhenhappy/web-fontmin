'use strict';

var express = require('express');
var router = express.Router();

/* GET users listing. */

// tes
router.get('/', function(req, res, next) {
  res.render('access', { title: '渠道接入' });
});

module.exports = router;
