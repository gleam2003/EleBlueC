(function () {
    angular
        .module('EleBlueC')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', 'togglerService', 'Auth', '$translate', '$location', '$mdDialog', '$filter'];

    function LoginCtrl($scope, togglerService, Auth, $translate, $location, $mdDialog, $filter) {
        $scope.toggleLeft = togglerService.buildToggler('left');
        $scope.toggleRight = togglerService.buildToggler('right');

        function showAlert(error) {

            alert = $mdDialog.alert({
                title: $filter('translate')('warning'),
                content: $filter('translate')(error.code),
                ok: $filter('translate')('close')
            });

            $mdDialog
                .show(alert)
                .finally(function () {
                    alert = undefined;
                });
        }


        $scope.loading = false;

        $scope.loginWithPassword = function () {
            $scope.loading = true;
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
                $scope.loading = false;
                showAlert(error);
            });
        };

        $scope.send = function (event, i) {
            event.preventDefault();
            $location.path(i);
        };

    };
})()	