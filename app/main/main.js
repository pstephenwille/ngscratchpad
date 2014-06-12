'use strict';

angular.module('main', [])
    .controller('MainCtrl', function ($scope, AllActivities, GlobalFactory, activitiesService) {
        console.log('main ctrl');

        $scope.activity = AllActivities.texasHoldem;
        $scope.scope = GlobalFactory.scope;
        $scope.activitiesService = activitiesService.service;
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
