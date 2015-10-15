(function () {
    angular
        .module('EleBlueC')
        .controller('RightCtrl', RightCtrl);

    RightCtrl.$inject = ['$scope', '$timeout', '$mdSidenav'];

    function RightCtrl($scope, $timeout, $mdSidenav) {
        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    console.debug("close RIGHT is done");
                });
        };
    };
})()	