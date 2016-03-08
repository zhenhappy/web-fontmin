'use strict';

var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
  console.log(req.files);
  console.log(req.file);
  console.log(req.body);
  res.json({ base64String: '1212' });
});

module.exports = router;
