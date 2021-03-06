'use strict';
module.exports = function($scope, $http, $location, $modal) {

  var util = require('../../../util/util');

  // You can access the scope of the controller from here
  $scope.forgotPassword = function() {
    $location.path('/forgotpassword');
  };

  /**
   * Form Validator cofig start
   */
  $('#signin').validate({
    rules: {
      password: 'required',
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      password: lang.validationMessages.password,
      email: {
        required: lang.validationMessages.email.required,
        email: lang.validationMessages.email.email,
      }
    },
    highlight: function(element) {
      $(element).closest('.form-control').removeClass('has-success').addClass('has-error');
    },
    success: function(element) {
      $(element).closest('.form-control').removeClass('has-error');
      $(element).closest('label').remove();
    }
  });
  /**
   * Form Validator cofig end
   */

  $scope.loginCredentials = {
    email: 'sandip.saha@innofied.com',
    password: 'sandip'
  };
  $scope.errors = [];

  $scope.doSignIn = function() {

    if ($('#signin').valid()) {
      $scope.loading = true;
      $http.post(util.api.login, {
        email: $scope.loginCredentials.email,
        password: MD5($scope.loginCredentials.password),
        //password: $scope.loginCredentials.password,
        secure: true
          //secure: false
      }).success(function(response) {
        if (response.success) {
          $scope.loading = false;
          util.loggedInUser = response.data;
          if (util.loggedInUser.firstTime) {
            util.instances.modal = $modal.open({
              templateUrl: 'app/modules/user/views/changepassword.html',
              size: ''
            });
          } else {
            $location.path('/employees/list');
          }
        } else {
          $scope.loading = false;
          if (response.errors && response.errors.length > 0) {
            $scope.errors = [lang.networkError];
            $scope.showErrors = true;
            util.errorMessageTimeout({
              success: function() {

                $scope.errors = [];
                $scope.showErrors = false;
                $scope.$apply();
              }
            });
          } else {
            $scope.errors = _.values(response.errfor);
            $scope.showErrors = true;
            util.errorMessageTimeout({
              success: function() {

                $scope.errors = [];
                $scope.showErrors = false;
                $scope.$apply();
              }
            });
          }
        }
      }).error(function() {});
    }
  };
  /*
  $scope.$watch('errors', function(value) {
    if (value.length) {
      console.log('adding errors');
      $scope.showErrors = true;
    } else {
      console.log('removing errors');
      $scope.showErrors = false;
    }
  });*/

  $scope.showSubscribe = function() {
    $location.path('/subscribe');
  }

  // because this has happened asynchroneusly we've missed
  // Angular's initial call to $apply after the controller has been loaded
  // hence we need to explicityly call it at the end of our Controller constructor
  $scope.$apply();
};
