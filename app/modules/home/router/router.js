var fs = require('fs');

module.exports = function($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
     .state('app.home', {
        url: '/home',
        template : fs.readFileSync(__dirname+'/../templates/home.html')
    })
    .state('app.home.list', {
        url: '/list',
        template : fs.readFileSync(__dirname+'/../templates/playlists.html'),
        controller : 'PlaylistController'
    })
    // nested list with just some random string data
    .state('app.home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now.'
    })
     
}

