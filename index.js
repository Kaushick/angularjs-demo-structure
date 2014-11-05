window.name = "NG_DEFER_BOOTSTRAP!";

var angular = require('angular'),
App = require('./app/app');


angular.element().ready(function() {
    angular.resumeBootstrap([App['name']]);
});

