'use strict';

var express = require('express');
var router = express.Router();
var base64 = require('file-base64');
var pngdefry = require('pngdefry');
var path = require('path');
var mkdirp = require('mkdirp');
var del = require('del');
var fs = require('fs');
var uuid = require('node-uuid');

router.post('/', function(req, res, next) {
  mkdirp.sync(path.join(process.cwd(), 'tmp-png'));
  var id = uuid.v1();
  var output = path.join(process.cwd(), 'tmp-png', id + 'icon.png');
  var newOutput = output.replace(/\.png$/, id + '-new.png');

  base64.decode(req.body.base64String, output, function(err) {
    if (err) {
      return fail(res);
    }

    pngdefry(output, newOutput, function(err) {
      if (err) {
        return fail(res);
      }

      if (!fsExistsSync(newOutput)) {
        return fail(res);
      }

      base64.encode(newOutput, function(err, base64String) {
        if (err) {
          return fail(res);
        }

        del([output, newOutput])
          .then(function(err) {
            res.json({ base64String: base64String });
            return;
          })
          .catch(function(err) {
            if (err) {
              return fail(res);
            }
          });

      });
    });
  });

  // //////////////
  function fsExistsSync(path) {
    try {
      fs.accessSync(path, fs.F_OK);
    } catch (e) {
      return false;
    }

    return true;
  }

  function fail(res) {
    res.json({ base64String: null });
  }

});

module.exports = router;
