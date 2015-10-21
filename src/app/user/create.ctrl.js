(function () {
    angular
        .module('EleBlueC')
        .controller('CreateCtrl', CreateCtrl);

    CreateCtrl.$inject = ['$scope', '$location', 'AuthService', '$cordovaDevice'];

    function CreateCtrl($scope, $location, AuthService, $cordovaDevice) {

        var user;
        var device = $cordovaDevice.getDevice();

        $scope.createUser = function (event) {
            event.preventDefault();
            user = {
                email: $scope.user.email,
                password: $scope.user.password,
                firstname: $scope.user.firstname,
                lastname: $scope.user.lastname,
                city: $scope.user.city,
                state: $scope.user.state,
                postalCode: $scope.user.postalCode,
                device: device.cordova,
                platform: device.platform,
                version: device.version,
                uuid: device.uuid
            }
            AuthService.createUser(user);
        };

        $scope.states = ('AG AL AN AO AQ AR AP AT AV BA BT BL BN BG BI BO BZ BS BR CA CL CB CI CE CT CZ CH CO CS CR KR CN EN FM FE FI FG FC FR GE GO GR IM IS SP LT LE LC LI LO LU MC MN MS MT VS ME MI MO MB NA NO NU OG OT OR PD PA PR PV PG PU PE PC PI PT PN PZ PO RG RA RC RE RI RN RM RO SA SS SV SI SR SO TA TE TR TO TP TN TV TS UD VA VE VB VC VR VV VI VT').split(' ').map(function (state) {
            return {abbrev: state};
        })

    }
})();