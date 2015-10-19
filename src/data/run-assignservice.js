(function () {

    // Export
    angular
        .module('EleBlueC')
        .run(assignServicesToRootScope);

    // Inject dependencies
    assignServicesToRootScope.$inject = ['$rootScope', 'AuthService', 'sessionService'];

    function assignServicesToRootScope($rootScope, AuthService, sessionService) {
        $rootScope.AuthService = AuthService;
        $rootScope.sessionService = sessionService;
    }

})();