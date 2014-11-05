'use strict';
//libs
var angular = require('angular'),
  util = require('./util/util'),
  angularRoute = require('angular-route'),
  uiBootstrap = require('angular-bootstrap'),
  avengerModule = require('./modules/avengers/avengers.module'),
  Avengers = angular.module('app.avengers', []);
module.exports = Avengers;
