window.name = "NG_DEFER_BOOTSTRAP!";

window._ = require('underscore');
window.MD5 = require('MD5');
window.lang = require('./app/lang/lang');


require('angular');
require('angular-ui-router');
require('angular-bootstrap');
var App = require('./app/modules/application/app.module'),
  validator = require('jqueryValidation');

angular.element().ready(function() {
  angular.resumeBootstrap([App['name']]);
});
