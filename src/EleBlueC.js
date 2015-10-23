(function () {
    angular
        .module('EleBlueC', [
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute',
            'ngTouch',
            'ngMaterial',
            'ngCordova',
            'ngMap',
            'firebase',
            'ngMessages',
            'pascalprecht.translate'])
        .run(function ($rootScope, $cordovaBatteryStatus, $cordovaNetwork) {
            var app = {
                initialize: function () {
                    this.bindEvents();
                },
                bindEvents: function () {
                    document.addEventListener('deviceready', this.onDeviceReady, false);
                },
                onDeviceReady: function () {
                    console.log('Device Ready');
                }
            };

            app.initialize();
        });
})();