window.name = "NG_DEFER_BOOTSTRAP!";

require('angular');
require('angular-ui-router');
require('angular-bootstrap');
var App = require('./app/app');

angular.element().ready(function() {
  angular.resumeBootstrap([App['name']]);
});
