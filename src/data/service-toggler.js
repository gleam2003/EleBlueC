(function () {
    angular
        .module('EleBlueC')
        .service('togglerService', togglerService);

    togglerService.$inject = ['$mdSidenav', '$mdUtil'];

    function togglerService($mdSidenav, $mdUtil) {
        this.buildToggler = function (navID) {
            var debounceFn = $mdUtil.debounce(function () {
                $mdSidenav(navID)
                    .toggle()
                    .then(function () {
                    });
            }, 200);
            return debounceFn;
        };
    };

})()