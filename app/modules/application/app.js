'use strict';

var util = require('../../util/util'),
  avengerModule = require('../avengers/avengers.module');

var App = angular.module('app', ['ui.router', 'ui.bootstrap', 'app.avengers'])
  .config(require('../../router/router'));

module.exports = App;
