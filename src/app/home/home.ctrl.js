/**
 * Created by Arnaldo on 15/10/2015.
 */
(function () {
    angular
        .module('EleBlueC')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope', 'Auth', '$translate'];

    function HomeCtrl($scope, Auth, $translate) {
        $scope.auth = Auth;
        // any time auth status updates, add the user data to scope
        $scope.auth.$onAuth(function (authData) {
            $scope.authData = authData;
        });


        $scope.auth
    }
})()