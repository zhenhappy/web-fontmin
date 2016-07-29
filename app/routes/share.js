var express = require('express');
var router = express.Router();

/* GET users listing. */

// tes
router.get('/', function(req, res, next) {
  res.render('share', { title: '分享配置' });
});

module.exports = router;
