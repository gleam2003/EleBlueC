(function () {
    angular
        .module('EleBlueC')
        .controller('LeftCtrl', LeftCtrl);

    LeftCtrl.$inject = ['$scope', '$location'];

    function LeftCtrl($scope, $location) {

        $scope.send = function (event, i) {
            event.preventDefault();
            $location.path(i);
        };
    }
})();