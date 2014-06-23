'use strict';

angular.module('activities',
    ['activitiesService',
    'activities.woot'/* required */
    ]
)
    .controller('ActivitiesCtrl', function ($scope, AllActivities, activitiesService) {
        $scope.module = 'Activities';
        $scope.texasHoldem = AllActivities.texasHoldem;
        $scope.dependantService = activitiesService.service;

    })
    .factory('AllActivities', function () {
        return{
            texasHoldem: 'Texas Hold\'em, defined in "activities" as a factory'
        }
    }
);


angular.module('activities.woot', []
    )
    .controller('WootCtrl', function ($scope) {
//        var woot = this;
        $scope.ctrl = "activities.woot WootCtrl";
    })
    .factory('wootFactory', function () {
        return{
            name: "This is activites.woot factory service"
        };
    })
    .directive('wootDir', function($compile){
        return {
            restrict:'E',
            scope:true,
            template : '<h3>Rendered "woot-dir" directive::bound in {{ctrl}}</h2>',
            link:function(scope, element, attrs, ctrl){
                console.log(ctrl);
            }
        }
    }
);