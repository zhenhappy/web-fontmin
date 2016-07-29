'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('download-app', { title: '下载中心' });
});

module.exports = router;
