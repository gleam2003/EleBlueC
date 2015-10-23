(function () {
    angular
        .module('EleBlueC')
        .controller('RightCtrl', RightCtrl);

    RightCtrl.$inject = ['$scope', '$location', 'AuthService'];

    function RightCtrl($scope, $location, AuthService) {

        $scope.send = function (event, i) {
            event.preventDefault();
            $location.path(i);
        };

        $scope.logout = function (event) {
            event.preventDefault();
            AuthService.logOut();
        };
    }
})();