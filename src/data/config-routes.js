/**
 * Created by Arnaldo on 15/10/2015.
 */
(function () {
    'use strict';

    angular.module('EleBlueC')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    title: 'home',
                    templateUrl: 'src/app/home/home.html',
                    controller: 'HomeCtrl',
                    resolve: {
                        position: function(geolocationService) {
                            return geolocationService.getPosition(10000, false);
                        },
                        currentAuth: function (Auth) {
                                return Auth.$waitForAuth();
                        }
                    },
                    controllerAs: 'vm'
                })
                .when('/login', {
                    title: 'login',
                    templateUrl: 'src/app/user/login.html',
                    controller: 'LoginCtrl',
                    controllerAs: 'vm'
                })
                .when('/settings', {
                    title: 'setting',
                    templateUrl: 'src/app/user/settings.html',
                    controller: 'SettingsCtrl',
                    controllerAs: 'vm'
                })
                .when('/logout', {
                    title: 'logout',
                    templateUrl: 'src/app/user/logout.html',
                    controller: 'LogoutCtrl',
                    controllerAs: 'vm'
                })
                .when('/create', {
                    title: 'create',
                    templateUrl: 'src/app/user/create.html',
                    controller: 'CreateCtrl',
                    resolve: {
                        position: function(geolocationService){
                            return geolocationService.getPosition(10000,false);
                        }
                    },
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/'
                });
        })
})();