(function () {
    angular
        .module('EleBlueC')
        .controller('CreateCtrl', CreateCtrl);

    CreateCtrl.$inject = ['$scope', '$translate', '$location', '$mdDialog', '$filter'];

    function CreateCtrl($scope, $translate, $location, $mdDialog, $filter) {

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

        $scope.createUser = function (event) {
            event.preventDefault();
        };

    };
})()	