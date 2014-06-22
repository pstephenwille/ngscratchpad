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
    })
    .directive('wootDir', function(){
        return {
            restrict: 'E',
            scope:true,
            template:'<h2>rendered woot-dir directive::{{$parent.texasHoldem}}</h2>'+
                        '<p> "texas hold\'em" is bound in "ActivitiesCtrl"</p>',
            link:function(scope, element, attrs, ctrl){
                console.log(scope.texasHoldem);
            }
        }
    }
);