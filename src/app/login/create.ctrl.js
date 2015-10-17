(function () {
    angular
        .module('EleBlueC')
        .controller('CreateCtrl', CreateCtrl);

    CreateCtrl.$inject = ['$scope', 'togglerService', 'Auth', '$translate'];

    function CreateCtrl($scope, togglerService, Auth, $translate) {
        $scope.toggleLeft = togglerService.buildToggler('left');
        $scope.toggleRight = togglerService.buildToggler('right');

        $scope.auth = Auth;
        // any time auth status updates, add the user data to scope
        $scope.auth.$onAuth(function (authData) {
            $scope.authData = authData;
        });

        $scope.createUser = function () {
            $scope.message = null;
            $scope.error = null;

            Auth.$createUser({
                email: $scope.user.email,
                password: $scope.user.password
            }).then(function (userData) {
                $scope.message = "User created with uid: " + userData.uid;
            }).catch(function (error) {
                $scope.error = error;
            });
        };

    };
})()	