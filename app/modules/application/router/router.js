var fs = require('fs');

module.exports = function($stateProvider, $locationProvider, $urlRouterProvider) {
    console.log('loading routes');
    $stateProvider
    .state('app', {
        url: '/app',
        template: fs.readFileSync(__dirname+'/../templates/menu.html')
    })

    .state('app.about', {
        url: '/about',
        template: '<h1>gdgfsdf</h1>'
    })

    $urlRouterProvider.otherwise('/app');
     
}

