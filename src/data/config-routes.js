/**
 * Created by Arnaldo on 15/10/2015.
 */
(function () {
    'use strict';

    angular.module('c3aApp')
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeCtrl',
                    controllerAs: 'vm'
                })
                .otherwise({
                    redirectTo: '/'
                });
        })
})();