(function () {
    angular
        .module('EleBlueC')
        .controller('LogoutCtrl', LogoutCtrl);

    LogoutCtrl.$inject = ['$scope', '$location', 'AuthService'];

    function LogoutCtrl($scope, $location, AuthService) {
        AuthService.logOut();
        $location.path('/');
    };
})()	