(function () {
    angular
        .module('EleBlueC')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope', 'togglerService', '$translate', '$firebaseArray', 'AuthService'];

    function AppCtrl($scope, togglerService, $translate, $firebaseArray, AuthService) {
        $scope.toggleLeft = togglerService.buildToggler('left');
        $scope.toggleRight = togglerService.buildToggler('right');

        $scope.loading = false;

    };
})()	