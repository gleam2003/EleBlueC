(function () {
    angular
        .module('EleBlueC')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$translate', '$location', '$mdDialog', '$filter', 'AuthService'];

    function LoginCtrl($scope, $translate, $location, $mdDialog, $filter, AuthService) {

        $scope.loading = false;

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

        $scope.loginWithPassword = function (event) {
            event.preventDefault();
            console.log(AuthService.logInPassword($scope.user.email, $scope.user.password));

        };

        $scope.send = function (event, i) {
            event.preventDefault();
            $location.path(i);
        };

    };
})()	