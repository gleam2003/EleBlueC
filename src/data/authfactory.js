/**
 * Created by Arnaldo on 12/10/2015.
 */
(function () {
    angular
        .module('EleBlueC')
        .factory("Auth", Auth);

    Auth.$inject = ['$firebaseAuth'];

    function Auth ($firebaseAuth) {
        var ref = new Firebase("https://elebluec.firebaseio.com");
        return $firebaseAuth(ref);
    };

})();