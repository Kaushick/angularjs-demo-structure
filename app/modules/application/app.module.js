'use strict';

var util = require('../../util/util'),
  avengerModule = require('../home/home.module');

var App = angular.module('app', ['ui.router', 'ui.bootstrap', 'app.home'])
  .config(require('./router/router'));

module.exports = App;
