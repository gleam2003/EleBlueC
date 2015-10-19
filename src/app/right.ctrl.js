(function () {
    angular
        .module('EleBlueC')
        .controller('RightCtrl', RightCtrl);

    RightCtrl.$inject = ['$scope', '$timeout', '$mdSidenav', '$location', 'AuthService'];

    function RightCtrl($scope, $timeout, $mdSidenav, $location, AuthService) {
        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    console.debug("close RIGHT is done");
                });
        };

        $scope.send = function (event, i) {
            event.preventDefault();
            $mdSidenav('right').close();
            $location.path(i);
        };

        $scope.logout = function (event) {
            event.preventDefault();
            AuthService.logOut();
        };
    };
})()	