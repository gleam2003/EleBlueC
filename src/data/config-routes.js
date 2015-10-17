/**
 * Created by Arnaldo on 15/10/2015.
 */
(function () {
    'use strict';

    angular.module('EleBlueC')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'src/app/home/home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'vm'
                })
                .when('/login', {
                    templateUrl: 'src/app/user/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'vm'
                })
                .when('/create', {
                    templateUrl: 'src/app/user/create.html',
                    controller: 'CreateCtrl',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/'
                });
        })
})();