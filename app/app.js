'use strict';

var express = require('express');
var path = require('path');

// var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var access = require('./routes/access');
var stats = require('./routes/stats');
var distribution = require('./routes/distribution');
var user = require('./routes/user');
var downloadApp = require('./routes/download-app');
var redirect = require('./routes/redirect');
var message = require('./routes/message');
var share = require('./routes/share');
var convert = require('./routes/convert');
var update = require('./routes/update');
var operation = require('./routes/operation');
var umengcallback = require('./routes/umengcallback');

var app = express();

// view engine setup
if (app.get('env') === 'development') {
  app.set('views', path.join(__dirname, 'views', 'src'));
} else {
  app.set('views', path.join(__dirname, 'views', 'dist'));
}

app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

if (app.get('env') === 'development') {
  app.use(express.static(path.join(process.cwd())));
  app.use(express.static(path.join(process.cwd(), 'tmp')));

  // TODO should find a better way
  app.use(express.static(path.join(process.cwd(), 'assets', 'distribution')));
  app.use(require('connect-livereload')({ port: 35729 }));
  app.use(require('mocer')(__dirname + path.sep + 'mocks'));
} else {
  var basePath = process.cwd();
  if (basePath.endsWith('bin')) {
    basePath = basePath.slice(0, basePath.length - 4);
  }

  app.use(express.static(path.join(basePath, 'pub')));
}

// check cookies
app.use(function(req, res, next) {
  var dashboardPath = ['/access', '/stats', '/distribution'];

  if (!req.cookies.accessToken && dashboardPath.indexOf(req.url.path) > -1) {
    res.redirect('/user#/account/login');
    return;
  }

  next();
});

app.use('/', routes);

app.use('/access', access);
app.use('/stats', stats);
app.use('/distribution', distribution);
app.use('/user', user);
app.use('/download-app', downloadApp);
app.use('/redirect', redirect);
app.use('/message', message);
app.use('/pngdefry', convert);
app.use('/share', share);
app.use('/update', update);
app.use('/operation', operation);
app.use('/umengcallback', umengcallback);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', { message: err.message, error: err });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', { message: err.message, error: {} });
});

module.exports = app;
