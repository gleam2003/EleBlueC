(function () {

    // Export
    angular
        .module('EleBlueC')
        .factory('Auth',Auth);

    Auth.$inject = ['$firebaseAuth'];

    function Auth($firebaseAuth) {
        var ref = new Firebase("https://elebluec.firebaseio.com");
        return $firebaseAuth(ref);
    }

})();

/**
 * Created by Arnaldo on 19/10/2015.
 */
(function () {

    // Export
    angular.module('EleBlueC')
        .service('AuthService', AuthService);

    // Inject dependencies
    AuthService.$inject = ['sessionService', '$mdDialog', '$filter', '$location', 'Auth'];

    function AuthService(sessionService, $mdDialog, $filter, $location, Auth) {

        var authObj = Auth;

        this.logInPassword = logInPassword;
        this.isLoggedIn = isLoggedIn;
        this.logInAnonymously = logInAnonymously;
        this.createUser = createUser;
        this.logOut = logOut;

        authObj.$onAuth(function(authData){
            console.log(authData);
        });


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
            $location.path("/");
        }

        function isLoggedIn() {
            var authData = authObj.$getAuth();

            if (authData) {
                return authObj.$getAuth();
            } else {
                return null;
            }

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