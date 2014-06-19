'use strict';

angular.module('dining',
    ['activitiesService']
)
    .controller('DiningCtrl', function ($scope, AllActivities, activitiesService) {
        $scope.module = 'dining';
        $scope.texasHoldem = AllActivities.texasHoldem;
        $scope.dependantService = activitiesService.service;

    });


