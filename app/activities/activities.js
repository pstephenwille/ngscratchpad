'use strict';

angular.module('activities',
    ['activitiesService']
    )
    .controller('ActivitiesCtrl', function ($scope, AllActivities, activitiesService) {
        $scope.module = 'Activities';
        $scope.texasHoldem = AllActivities.texasHoldem;
        $scope.dependantService = activitiesService.service;

    })
    .factory('AllActivities', function () {
        return{
            texasHoldem: 'Texas Hold\'em'
        }
    }
);
