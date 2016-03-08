'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();
var Fontmin = require('fontmin');
var intoStream = require('into-stream');
var rename = require('gulp-rename');
var uuid = require('node-uuid');

router.post('/', function (req, res, next) {
  var output = path.join(process.cwd(), 'public', 'uploads', req.files[0].originalname);
  var id = uuid.v1();

  var dest = path.join(process.cwd(), 'public', 'fontmin', id);

  var rs = intoStream(req.files[0].buffer);
  var ws = fs.createWriteStream(output);
  rs.pipe(ws);
  rs.on('end', function () {
    console.log('end');

    console.log(req.body);
    var fontPath = '/fontmin/' + id + '/';
    var cssPath = path.join(process.cwd(), 'public', 'fontmin', id, 'web-fontmin.css');

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
      .use(Fontmin.css({
        fontPath: fontPath,
      })) // css 生成插件
      .dest(dest);

    // 执行
    fontmin.run(function (err, files, stream) {
      if (err) { // 异常捕捉
        console.error(err);
      }
      console.log(cssPath);

      fs.readFile(cssPath, "utf-8", function(err, data) {
        console.log(data); // 成功
        res.json({ style: data });
      });

    });

    // ////////////////////////////////////

  });

  rs.on('error', function (err) {
    console.log(err);
    throw err;
  });

});

module.exports = router;
