'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var router = express.Router();
var Fontmin = require('fontmin');
var intoStream = require('into-stream');
var rename = require('gulp-rename');
var uuid = require('node-uuid');
var EasyZip = require('easy-zip').EasyZip;

router.post('/', function (req, res, next) {
  var originalname = req.files[0].originalname;
  var fontFamily = originalname.replace(/\.ttf/, '');
  var output = path.join(process.cwd(), 'public', 'uploads', originalname);
  var id = uuid.v1();

  var dest = path.join(process.cwd(), 'public', 'fontmin', id);

  var rs = intoStream(req.files[0].buffer);
  var ws = fs.createWriteStream(output);
  rs.pipe(ws);
  rs.on('end', function () {
    console.log('end');

    console.log(req.body);
    var fontPath = '/fontmin/' + id + '/';
    var cssPath = path.join(process.cwd(), 'public', 'fontmin', id, originalname.replace(/\.ttf/, '.css'));
    console.log(cssPath);

    // 初始化
    var fontmin = new Fontmin()
      .src(output)
      .use(rename(originalname))
      .use(Fontmin.glyph({ // 字型提取插件
        text: req.body.text // 所需文字
      }))
      .use(Fontmin.ttf2eot()) // eot 转换插件
      .use(Fontmin.ttf2woff()) // woff 转换插件
      .use(Fontmin.ttf2svg()) // svg 转换插件
      .use(Fontmin.css({ fontPath: fontPath, asFileName: true })) // css 生成插件
      .dest(dest);

    // 执行
    fontmin.run(function (err, files, stream) {
      if (err) { // 异常捕捉
        console.error(err);
      }

      console.log(cssPath);

      fs.readFile(cssPath, 'utf-8', function (err, data) {
        console.log(data); // 成功

        var str = data;
        var reg = /url\("\/fontmin\/([^/]+)\//g;

        str = str.replace(reg, 'url("/fonts/');
        console.log(str);

        fs.writeFile(cssPath, str, function (err) {
          if (err) {
            return console.log(err);
          }

          var zip = new EasyZip();
          var outputName = path.join(process.cwd(), 'public', 'fontmin', id + '.zip');

          zip.zipFolder(dest, function () {
            zip.writeToFile(outputName);

            res.json({
              style: data,
              fontFamily: fontFamily,
              zipUrl: '/fontmin/' + id + '.zip'
            });

          });

        });

      });

    });

  });

  rs.on('error', function (err) {
    console.log(err);
    throw err;
  });

});

module.exports = router;
