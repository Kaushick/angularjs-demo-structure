'use strict';

var util = require('../../util/util'),
  avengerModule = require('../home/home.module');

var App = angular.module('app', ['ui.router', 'ui.bootstrap', 'app.home'])
  .controller('LoginController', ['$scope', '$http', '$location', '$modal', require('./controllers/login')])
  .controller('SignupController', require('./controllers/signup'))
  .controller('SubscribeController', require('./controllers/subscribe'))
  .controller('ForgotpasswordController', require('./controllers/forgotpassword'))
  .config(require('./router/router'));

module.exports = App;
