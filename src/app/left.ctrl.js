(function () {
    angular
        .module('EleBlueC')
        .controller('LeftCtrl', LeftCtrl);

    LeftCtrl.$inject = ['$scope', '$timeout', '$mdSidenav', 'Auth', '$translate'];

    function LeftCtrl($scope, $timeout, $mdSidenav, Auth, $translate) {

        $scope.auth = Auth;
        // any time auth status updates, add the user data to scope
        $scope.auth.$onAuth(function (authData) {
            $scope.authData = authData;
        });

        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    console.debug("close LEFT is done");
                });
        };


    };
})()	