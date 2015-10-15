/**
 * Created by Arnaldo on 15/10/2015.
 */
(function () {
    angular
        .module('EleBlueC')
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('orange');
        })
})();
