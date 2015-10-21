(function () {
    angular
        .module('EleBlueC')
        .controller('CreateCtrl', CreateCtrl);

    CreateCtrl.$inject = ['$scope', '$location', 'AuthService'];

    function CreateCtrl($scope, $location, AuthService) {

        var user;

        $scope.createUser = function (event) {
            event.preventDefault();
            user = {
                email: $scope.user.email,
                password: $scope.user.password,
                firstname: $scope.user.firstname,
                lastname: $scope.user.lastname
            }
            AuthService.createUser(user);
        };

    }
})();