'use strict';

var util = require('../../util/util'),
  Avengers = angular.module('app.avengers', [])
  .controller('PlaylistController', require('./controllers/playlists'));

module.exports = Avengers;
