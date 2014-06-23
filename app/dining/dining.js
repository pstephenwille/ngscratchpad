'use strict';

angular.module('dining',
    []
)
    .controller('DiningCtrl', function ($scope, AllActivities, activitiesService) {
        $scope.module = 'dining';
        $scope.texasHoldem = AllActivities.texasHoldem;
        $scope.dependantService = activitiesService.service;

    });


