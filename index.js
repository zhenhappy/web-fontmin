'use strict';

var merge = require('utils-merge');

module.exports = createServer;

var proto = {};
var vproto = {};

function createServer() {
  function app(req, res, next) {
    console.log(111);
    res.end('Hello from Connect!\n');
  }

  // merge(app, proto);
  return app;
}

proto.use = function(route, fn) {};

vproto.used = function use(route, fn) {
  var handle = fn;
  var path = route;

  // default route to '/'
  if (typeof route !== 'string') {
    handle = route;
    path = '/';
  }

  // wrap sub-apps
  if (typeof handle.handle === 'function') {
    var server = handle;
    server.route = path;
    handle = function(req, res, next) {
      server.handle(req, res, next);
    };
  }

  // wrap vanilla http.Servers
  if (handle instanceof http.Server) {
    handle = handle.listeners('request')[0];
  }

  // strip trailing slash
  if (path[path.length - 1] === '/') {
    path = path.slice(0, -1);
  }

  // add the middleware
  debug('use %s %s', path || '/', handle.name || 'anonymous');
  this.stack.push({route: path, handle: handle});

  return this;
};
