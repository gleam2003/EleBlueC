(function () {
    angular
        .module('EleBlueC')
        .factory('geolocationService', geolocationService);

    geolocationService.$inject = ['$cordovaGeolocation'];

    function geolocationService ($cordovaGeolocation) {
        var sdo = {
            getPosition: function (timeout,enableHighAccuracy) {
                var promise = $cordovaGeolocation.getCurrentPosition({timeout: timeout, enableHighAccuracy: enableHighAccuracy});
                promise.then(function(position){
                    return position;
                });
                return promise;
            }
        };

        return sdo
    }
})();