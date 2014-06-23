'use strict';

/**authorization before each page load
 * use $stateChangeStart to check auth and event.preventDefault() to cancel route.
 * */

angular.module('haldev01App', [
    'ui.router',
    'main',
    'login',
    'activities',
    'dining'
])
    /**
     * single place to list all the apps states/routes
     * */
.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'main/main.html',
            controller: 'MainCtrl'
        })
        .state('activities', {
            url: '/activities',
            templateUrl: 'activities/activities.html',
            controller: 'LoginCtrl'
        })
        .state('dining', {
            url: '/dining',
            templateUrl: 'dining/dining.html',
            controller: 'DiningCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'login/login.html',
            controller: 'ActivitiesCtrl'
        });
})
.factory('GlobalFactory', function(){
    return{
        scope:'This value defined in main app as a factory service'
    }
})
.run(function ($rootScope, $urlRouter, $state) {

    $rootScope.$on('$locationChangeSuccess', function (evt, toState, toParams, fromState, fromParams) {

        // Halt state change from even starting
        evt.preventDefault();

        // Perform auth logic
        var auth = Math.floor(Math.random()*100);
        if(!auth){
            // auth failed, redirect
            $state.transitionTo('login');
        }
        else{
            // auth pased, continue route
            $urlRouter.sync();
        }

    })

});


