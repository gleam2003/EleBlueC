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
                    templateUrl: 'src/app/login/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'vm'
                })
                .when('/create', {
                    templateUrl: 'src/app/login/create.html',
                    controller: 'CreateCtrl',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/'
                });
        })
})();