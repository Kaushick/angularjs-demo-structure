'use strict';
//libs
// var angular = require('angular'),

var util = require('./util/util'),
  // angularRoute = require('angular-route'),
  // uiBootstrap = require('angular-bootstrap'),
  avengerModule = require('./modules/avengers/avengers.module');

var App = angular.module('app', ['ui.router', 'ui.bootstrap', 'app.avengers'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      console.log('loading routes');
      $stateProvider

        .state('app', {
        url: '/app',
        templateUrl: 'templates/home.html'
      })

      .state('app.home', {
        url: '/home',
        templateUrl: 'templates/menu.html'
      })

      .state('app.home.list', {
        url: '/list',
        templateUrl: 'templates/playlists.html',
        controller: function($scope, $state) {
          $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
          $scope.moveToSibling = function() {
            $state.go('app');
          }
        }
      })

      .state('app.about', {
        url: '/about',
        template: '<h1>gdgfsdf</h1>'
      })

      // nested list with just some random string data
      .state('app.home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
      })

      $urlRouterProvider.otherwise('/');
      /*.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent@app': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('app.browse', {
          url: '/browse',
          views: {
            'menuContent@app': {
              templateUrl: 'templates/browse.html'
            }
          }
        })
        .state('app.playlists', {
          url: '/playlists',
          views: {
            'menuContent@app': {
              templateUrl: 'templates/playlists.html',
              // controller: 'PlaylistsCtrl'
            }
          }
        })

      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      });


      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/playlists');*/
    }
  ]);

// var router = require('./route/router');

module.exports = App;
