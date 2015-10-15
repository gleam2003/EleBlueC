(function () {
    angular
        .module('EleBlueC')
        .controller('LeftCtrl', LeftCtrl);

    LeftCtrl.$inject = ['$scope', '$timeout', '$mdSidenav'];

    function LeftCtrl($scope, $timeout, $mdSidenav) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    console.debug("close LEFT is done");
                });
        };
    };
})()	