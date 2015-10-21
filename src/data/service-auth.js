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

        this.logInPassword = logInPassword;
        this.isLoggedIn = isLoggedIn;
        this.logInAnonymously = logInAnonymously;
        this.createUser = createUser;
        this.logOut = logOut;


        if (!isLoggedIn()) {
            logInAnonymously();
        }

        function createUser(user) {
            return authObj
                .$createUser({
                    email: user.email,
                    password: user.password
                })
                .then(
                function (authData) {
                    var users = new Firebase("https://elebluec.firebaseio.com/users/");
                    var uid = users.child(authData.uid);
                    var password = user.password;
                    delete user.password;
                    uid.set(user);
                    user.password = password;
                    logInPassword(user);
                },
                function (error) {
                    showAlert(error);
                }
            );

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

        function logOut() {
            authObj.$unauth();
            sessionService.destroy();
            logInAnonymously();
        };

        function isLoggedIn() {
            return sessionService.getAuthData() !== null;
        }

        function logInAnonymously() {
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
        }

        function logInPassword(user) {
            return authObj
                .$authWithPassword({
                    email: user.email,
                    password: user.password
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
        }
    }

})();