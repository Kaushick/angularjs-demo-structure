var fs = require('fs');

module.exports = function($stateProvider, $locationProvider, $urlRouterProvider) {
    console.log('loading routes');
    $stateProvider
    .state('app', {
        url: '/app',
        template: fs.readFileSync(__dirname+'/../modules/application/templates/home.html')
    })

    .state('app.home', {
        url: '/home',
        template : fs.readFileSync(__dirname+'/../modules/avengers/templates/menu.html')
    })

    .state('app.home.list', {
        url: '/list',
        template : fs.readFileSync(__dirname+'/../modules/avengers/templates/playlists.html'),
        controller : 'PlaylistController'
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

    $urlRouterProvider.otherwise('/app');
     
}

