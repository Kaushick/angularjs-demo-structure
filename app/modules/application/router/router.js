var fs = require('fs');
var util = require('../../../util/util');

module.exports = function($stateProvider, $locationProvider, $urlRouterProvider) {
  console.log('loading routes');
  $stateProvider
    .state('app', {
      url: '/app',
      template: fs.readFileSync(__dirname + '/../templates/menu.html')
    })

  .state('app.about', {
    url: '/about',
    template: '<h1>gdgfsdf</h1>'
  })

  .state('signin', {
    url: '/signin',
    template: fs.readFileSync(__dirname + '/../templates/signin.html'),
    controller: 'LoginController'
  })

  .state('signup', {
    url: '/signup',
    template: fs.readFileSync(__dirname + '/../templates/signup.html'),
    controller: 'SignupController'
  })

  .state('subscribe', {
    url: '/subscribe',
    template: fs.readFileSync(__dirname + '/../templates/subscribe.html'),
    controller: 'SubscribeController'
  })

  .state('forgotPassword', {
    url: '/forgot_password',
    template: fs.readFileSync(__dirname + '/../templates/forgotpassword.html'),
    controller: 'ForgotpasswordController'
  });

  $urlRouterProvider.otherwise(function($injector, $location) {
    var $state = $injector.get('$state');
    if (util.loggedInUser && util.loggedInUser._id) {
      $state.go('app');
    } else {
      $state.go('signin');
    }
  });

}

/*.state('signin', {
  url: '/signin',
  template: '<h1>gdgfsdf</h1>'
});*/

/*$urlRouterProvider.otherwise(function(util, $state) {
  if (util.loggedInUser && util.loggedInUser._id) {
    $state.go('app');
  } else {
    $state.go('signin');
  }
});*/
