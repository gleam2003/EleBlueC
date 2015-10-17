(function () {
    angular
        .module('EleBlueC', [
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngRoute',
            'ngMaterial',
            'ngCordova',
            'ngMap',
            'firebase',
            'ngMessages',
            'pascalprecht.translate'])
        .run(function ($rootScope, $cordovaBatteryStatus, $cordovaNetwork) {
            console.log('Module EleBlueC Run');
            var app = {
                initialize: function () {
                    this.bindEvents();
                },
                bindEvents: function () {
                    document.addEventListener('deviceready', this.onDeviceReady, false);
                },
                onDeviceReady: function () {
                    console.log('Device Ready');
                    console.log($cordovaNetwork.getNetwork());
                    console.log($cordovaNetwork.isOnline());

                    $rootScope.$on("$cordovaBatteryStatus:status", function (event, status) {
                        console.log('Battery:' + status.level);
                        console.log('Is Plugged:' + status.isPlugged);
                    });

                    $rootScope.$on("$cordovaNetwork:offline", function (event, result) {
                        console.log('OffLine');
                        console.log(result);
                    });

                    $rootScope.$on("$cordovaNetwork:online", function (event, result) {
                        console.log('OnLine');
                        console.log(result);
                    });
                }
            };

            app.initialize();
        });
})();