/**
 * Created by Arnaldo on 19/10/2015.
 */
(function () {

    // Export
    angular.module('EleBlueC')
        .service('AuthService', AuthService);

    // Inject dependencies
    AuthService.$inject = ['$firebaseAuth', 'sessionService', '$mdDialog', '$filter', '$location'];

    function AuthService($firebaseAuth, sessionService, $mdDialog, $filter, $location) {

        var ref = new Firebase('https://elebluec.firebaseio.com/');
        var authObj = $firebaseAuth(ref);

        this.isLoggedIn = function isLoggedIn() {
            return sessionService.getAuthData() !== null;
        };

        this.logInAnonymously = function () {
            return authObj
                .$authAnonymously()
                .then(
                function (authData) {
                    sessionService.setAuthData(authData);
                },
                function (error) {
                    showAlert(error);
                }
            );
        };

        this.logInPassword = function (email, password) {
            return authObj
                .$authWithPassword({
                    email: email,
                    password: password
                })
                .then(
                function (authData) {
                    sessionService.setAuthData(authData);
                    $location.path("/");
                },
                function (error) {
                    showAlert(error);
                }
            );
        };

        this.logOut = function () {
            authObj.$unauth();
            sessionService.destroy();
            this.logInAnonymously();
        };

        if (!this.isLoggedIn()) {
            this.logInAnonymously();
        }

        function showAlert(error) {
            alert = $mdDialog.alert({
                title: $filter('translate')('warning'),
                content: $filter('translate')(error.code),
                ok: $filter('translate')('close')
            });
            $mdDialog
                .show(alert)
                .finally(function () {
                    alert = undefined;
                });
        }
    }

})();