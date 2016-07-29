var express = require('express');
var router = express.Router();

/* GET users listing. */

// tes
router.get('/', function(req, res, next) {
  res.render('update', { title: '更新' });
});

module.exports = router;
