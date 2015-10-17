(function () {
    angular
        .module('EleBlueC')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', 'togglerService', 'Auth', '$translate', '$location'];

    function LoginCtrl($scope, togglerService, Auth, $translate, $location) {
        $scope.toggleLeft = togglerService.buildToggler('left');
        $scope.toggleRight = togglerService.buildToggler('right');

        $scope.loginWithPassword = function () {
            $scope.authData = null;
            $scope.error = null;

            $scope.auth = Auth;
            // any time auth status updates, add the user data to scope
            $scope.auth.$onAuth(function (authData) {
                $scope.authData = authData;
            });

            $scope.auth.$authWithPassword({
                email: $scope.user.email,
                password: $scope.user.password
            }).then(function (authData) {
                $scope.authData = authData;
                $location.path("/");
            }).catch(function (error) {
                $scope.error = error;
            });
        };

        $scope.send = function (event, i) {
            event.preventDefault();
            $location.path(i);
        };

    };
})()	