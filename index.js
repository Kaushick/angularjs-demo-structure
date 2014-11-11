window.name = "NG_DEFER_BOOTSTRAP!";

window._ = require('underscore');
window.$ = require('jquery');
window.lang = require('./app/lang/lang');
// window.validator = require('jquery-validation');

// require('validator');
require('angular');
require('angular-ui-router');
require('angular-bootstrap');
var App = require('./app/modules/application/app.module');

angular.element().ready(function() {
  angular.resumeBootstrap([App['name']]);
});

/*
  "browser": {
    "jQuery": "./bower_components/jquery/dist/jquery.js",
    "validator": "./bower_components/jquery-validation/dist/jquery.validate.js"
  },
  "browserify-shim": {
    "jQuery": {
      "exports": "jQuery"
    },
    "validator": {
      "depends": ["jQuery"],
      "exports": "validator"
    }
  },
  "browserify": {
    "transform": [
      "browserify-shim"
    ]
  },*/
