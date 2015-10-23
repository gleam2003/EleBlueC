/**
 * Created by Arnaldo on 19/10/2015.
 */
(function () {

    // Export
    angular.module('EleBlueC')
        .service('logService', logService);

    // Inject dependencies
    logService.$inject = [];

    function logService() {
        var _position;
        var _device;
        var _user;

        this.setPosition = setPosition;
        this.setDevice = setDevice;
        this.setUser = setUser;

        function setPosition(position){
            var _position = {
                accuracy: position.coords.accuracy,
                longitude: position.coords.longitude,
                latitude: position.coords.latitude,
                timestamp: position.timestamp
            };
        }

        function setDevice(device){
            var _device = device;
        }

        function setUser(user){
            var _user = user;
        }

    }

})();
