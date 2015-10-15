(function () {
    angular
        .module('EleBlueC')
        .service('logService', logService);

    logService.$inject = ['$mdSidenav', '$mdUtil'];

    function logService($mdSidenav, $mdUtil) {
        this.buildToggler = function (navID) {
            var debounceFn = $mdUtil.debounce(function () {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                        console.debug("toggle " + navID + " is done");
                    });
            }, 200);
            return debounceFn;
        };
    };

})()