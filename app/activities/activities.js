'use strict';

angular.module('activities',
    ['activitiesService',
    'activities.woot']
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


angular.module('activities.woot', []
    )
    .controller('WootCtrl', function () {
        $scope.ctrl = "activities.woot ctrl";
    })
    .factory('wootFactory', function () {
        return{
            name: "activites.woot factory service"
        };
    }
);