'use strict';

var util = require('../../util/util'),
Home = angular.module('app.home', ['ui.router', 'ui.bootstrap'])
.controller('PlaylistController', require('./controllers/playlists'))
.config(require('./router/router'));

module.exports = Home;
