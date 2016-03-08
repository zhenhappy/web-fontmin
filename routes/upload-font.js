'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();
var Fontmin = require('fontmin');
var intoStream = require('into-stream');
var rename = require('gulp-rename');

router.post('/', function (req, res, next) {
  var output = path.join(process.cwd(), 'public', 'uploads', req.files[0].originalname);

  var dest = path.join(process.cwd(), 'public', 'fonts');

  var rs = intoStream(req.files[0].buffer);
  var ws = fs.createWriteStream(output);
  rs.pipe(ws);
  rs.on('end', function () {
    console.log('end');

    console.log(req.body);

    // 初始化
    var fontmin = new Fontmin()
      .src(output)
      .use(rename('web-fontmin.ttf'))

      .use(Fontmin.glyph({ // 字型提取插件
        text: req.body.text // 所需文字
      }))
      .use(Fontmin.ttf2eot()) // eot 转换插件
      .use(Fontmin.ttf2woff()) // woff 转换插件
      .use(Fontmin.ttf2svg()) // svg 转换插件
      .use(Fontmin.css()) // css 生成插件
      .dest(dest);

    // 执行
    fontmin.run(function (err, files, stream) {
      if (err) { // 异常捕捉
        console.error(err);
      }

      console.log('done'); // 成功
    });

    // ////////////////////////////////////

  });

  rs.on('error', function (err) {
    console.log(err);
    throw err;
  });

  res.json({ base64String: '1212' });
});

module.exports = router;
