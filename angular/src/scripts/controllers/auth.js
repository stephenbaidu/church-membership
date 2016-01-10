'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('AuthCtrl', function ($scope, $rootScope, APP, $auth, $http, $state, exMsg, $uibModalStack) {
    var vm = this;

    vm.user = {};

    vm.submitLogin = function (user) {
      $auth.submitLogin(vm.user);
    }

    vm.submitRegistration = function (user) {
      $auth.submitRegistration(vm.user);
    }

    vm.goToSignUpPage = function () {
      $scope.$dismiss();
      // $state.go('newUser.signup');
      console.log('still still valid')
      // $uibModalStack.dismissAll();
      // $state.go($state.current, {}, {reload: true});
      // console.log('still still valid')
        // $scope.$dismiss();
        // $state.go('auth.signup')
      // if ($uibModalStack.getTop()) {
      // }
    }

    vm.goToSignInPage = function () {
      $uibModalStack.dismissAll();
      $state.go('auth.signin');
    }

    vm.closeSignUpPage = function () {
      $uibModalStack.dismissAll();
      console.log('still valid')
      // if ($uibModalStack.getTop()) {
      //   $scope.$dismiss();
      // }
      // $state.go('^');
    }

    vm.sendPasswordResetEmail = function () {
      exMsg.sweetAlert({
        title: 'Password Reset',
        text: 'Email',
        type: 'input',
        showCancelButton: true,
        animation: 'slide-from-top'
      }, function (email) {
        if (email === false) return false;
        if (email === '') {
          exMsg.sweetAlert.showInputError('No email provided!');
          return false
        }

        $auth.requestPasswordReset({email: email});
      });
    }

    vm.sendConfirmationInstructions = function () {
      exMsg.sweetAlert({
        title: 'Confirmation Instructions',
        text: 'Email',
        type: 'input',
        showCancelButton: true,
        animation: 'slide-from-top'
      }, function (email) {
        if (email === false) return false;
        if (email === '') {
          exMsg.sweetAlert.showInputError('No email provided!');
          return false
        }

        $http.post(APP.apiPrefix + 'users/send_confirmation_instructions', { email: email })
          .success(function (data) {
            if(data.error) {
              exMsg.sweetAlert('Error', data.message, 'error');
            } else {
              exMsg.sweetAlert('Successful', data.message, 'success');
            }
          });
      });
    }

    vm.sendUnlockInstructions = function () {
      // 
    }
  });