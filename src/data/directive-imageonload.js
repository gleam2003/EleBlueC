(function () {
    angular
        .module('EleBlueC')
        .directive('imageonload', function () {
            return {
                restrict: 'A',

                link: function (scope, element) {
                    element.on('load', function () {
                        // Set visibility: true + remove spinner overlay
                        console.log('load')
                    });
                    scope.$watch('ngSrc', function () {
                        // Set visibility: false + inject temporary spinner overlay
                        console.log('watch')
                    });
                }
            };
        })
})();