var Service = require('./app/Service');
var morgan = require('morgan');
var config = require('config');

var logger = morgan(config.get('logLevel'));

var service = new Service();
service.start(9001);