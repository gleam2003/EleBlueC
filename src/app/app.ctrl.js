(function () {
    angular
        .module('EleBlueC')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope', 'togglerService', 'Auth', '$translate'];

    function AppCtrl($scope, togglerService, Auth, $translate) {
        $scope.toggleLeft = togglerService.buildToggler('left');
        $scope.toggleRight = togglerService.buildToggler('right');

        $scope.loading = false;

        $scope.auth = Auth;
        // any time auth status updates, add the user data to scope
        $scope.auth.$onAuth(function(authData) {
            $scope.authData = authData;
            localStorage.setItem('authData', JSON.stringify(authData));
        });

        if (!localStorage.getItem('authData')) {

            $scope.loading = true;
            $scope.error = null;
            $scope.auth.$authAnonymously().then(function (authData) {
                $scope.authData = authData;
                $scope.loading = false;
            }).catch(function (error) {
                $scope.error = error;
                $scope.loading = false;
            });
        }
    };
})()	