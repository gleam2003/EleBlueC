(function () {
    angular
        .module('EleBlueC')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$location', 'AuthService'];

    function LoginCtrl($scope, $location, AuthService) {

        $scope.loginWithPassword = function (event) {
            event.preventDefault();
            AuthService.logInPassword($scope.user);

        };

        $scope.send = function (event, i) {
            event.preventDefault();
            $location.path(i);
        };

    }
})();