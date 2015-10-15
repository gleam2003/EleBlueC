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
                .otherwise({
                    redirectTo: '/'
                });
        })
})();