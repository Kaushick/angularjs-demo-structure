'use strict';

var util = require('../../util/util'),
  Avengers = angular.module('app.home', [])
  .controller('PlaylistController', require('./controllers/playlists'))
   .config(require('./router/router'));

module.exports = Avengers;
