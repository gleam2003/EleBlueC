(function () {
    angular
        .module('EleBlueC')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope', '$timeout', '$mdSidenav', '$mdUtil', 'logService', 'Auth'];

    function AppCtrl($scope, togglerService, Auth) {
        $scope.toggleLeft = togglerService.buildToggler('left');
        $scope.toggleRight = togglerService.buildToggler('right');

        $scope.createUser = function() {
            $scope.message = null;
            $scope.error = null;

            Auth.$createUser({
                email: $scope.user.email,
                password: $scope.user.password
            }).then(function(userData) {
                $scope.message = "User created with uid: " + userData.uid;
            }).catch(function(error) {
                $scope.error = error;
            });
        };

        $scope.auth = Auth;
        // any time auth status updates, add the user data to scope
        $scope.auth.$onAuth(function(authData) {
            $scope.authData = authData;
        });

        $scope.login = function() {
            $scope.authData = null;
            $scope.error = null;

            $scope.auth.$authAnonymously().then(function (authData) {
                $scope.authData = authData;
            }).catch(function (error) {
                $scope.error = error;
            });
        };

        $scope.loginWithPassword = function() {
            $scope.authData = null;
            $scope.error = null;

            $scope.auth.$authWithPassword({
                email: $scope.user.email,
                password: $scope.user.password
            }).then(function (authData) {
                $scope.authData = authData;
            }).catch(function (error) {
                $scope.error = error;
            });
        };

        $scope.unauth =function(){ $scope.auth.$unauth(); $scope.authData = null;};

    };
})()	