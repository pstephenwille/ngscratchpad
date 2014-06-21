'use strict';

angular.module('main', [])
    .controller('MainCtrl', function ($scope, AllActivities, GlobalFactory, activitiesService, wootFactory) {
        console.log('main ctrl');

        $scope.wootFactory = wootFactory.name;
        $scope.activity = AllActivities.texasHoldem;
        $scope.scope = GlobalFactory.scope;
        $scope.activitiesService = activitiesService.service;
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });
