/**
 * Created by Arnaldo on 15/10/2015.
 */
(function () {
    angular
        .module('EleBlueC')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$scope','$firebaseObject','sessionService'];

    function HomeCtrl($scope, $firebaseObject, sessionService) {

        if (sessionService.getUid()) {
            var ref = new Firebase("https://elebluec.firebaseio.com/");
            var users = ref.child('users');
            var uid = users.child(sessionService.getUid() ? sessionService.getUid() : '13082015');
            $scope.user = $firebaseObject(uid);
        }
    }
})()