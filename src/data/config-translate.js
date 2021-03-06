/**
 * Created by Arnaldo on 15/10/2015.
 */
(function () {
    'use strict';

    angular
        .module('EleBlueC')
        .config(function ($translateProvider) {

            $translateProvider.useStaticFilesLoader({
                prefix: 'src/languages/',
                suffix: '.json'
            });
            $translateProvider.preferredLanguage('it');
            $translateProvider.useSanitizeValueStrategy('escape');
            // Tell the module to store the language in the local storage
            $translateProvider.useLocalStorage();
        });


})();