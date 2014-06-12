'use strict';

angular.module('login',
    []
)
.controller('LoginCtrl', function ($scope) {
    $scope.module = 'Login';
    $scope.loginText = 'route blocked and redirected to login page';
});
