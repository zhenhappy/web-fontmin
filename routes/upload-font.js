'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();
var Fontmin = require('fontmin');
var intoStream = require('into-stream');

router.post('/', function (req, res, next) {
  var output = path.join(process.cwd(), 'public', 'uploads', req.files[0].originalname);
  var rs = intoStream(req.files[0].buffer);
  var ws = fs.createWriteStream(output);

  rs.on('end', function () {
    console.log('end');
  });

  rs.on('error', function (err) {
    console.log(err);
  });

  rs.pipe(ws);

  var fontmin = new Fontmin()
    .src('fonts/*.ttf')
    .dest('build/fonts');

  fontmin.run(function (err, files) {
    if (err) {
      throw err;
    }

    console.log(files[0]);

    // => { contents: <Buffer 00 01 00 ...> }
  });

  res.json({ base64String: '1212' });
});

module.exports = router;
