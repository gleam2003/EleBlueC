(function () {

    // Export
    angular
        .module('EleBlueC')
        .run(assignServicesToRootScope);

    // Inject dependencies
    assignServicesToRootScope.$inject = ['$rootScope', 'AuthService', 'sessionService','togglerService'];

    function assignServicesToRootScope($rootScope, AuthService, sessionService, togglerService) {
        $rootScope.AuthService = AuthService;
        $rootScope.sessionService = sessionService;
        $rootScope.toggleLeft = togglerService.buildToggler('left');
        $rootScope.toggleRight = togglerService.buildToggler('right');

        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
        });

    }

})();