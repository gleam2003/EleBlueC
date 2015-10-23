/**
 * Created by Arnaldo on 19/10/2015.
 */
(function () {


    // Export
    angular.module('EleBlueC')
        .service('sessionService', sessionService);

    // Inject dependencies
    sessionService.$inject = [];

    function sessionService() {

        this._authData = JSON.parse(localStorage.getItem('sessionService.authData'));

        this.getAuthData = function () {
            return this._authData;
        };

        this.getUid = function () {
            try {
                return this._authData.uid;
            } catch (error) {
                return false;
            }
        };

        this.getProvider = function () {
            try {
                return this._authData.provider;
            } catch (error) {
                return false;
            }
        };

        this.getExpires = function () {
            try {
                return this._authData.expires;
            } catch (error) {
                return false;
            }
        };

        this.getEmail = function () {
            try {
                return this._authData.password.email;
            } catch (error) {
                return false;
            }
        };

        this.getAvatar = function () {
            try {
                return this._authData.password.profileImageURL;
            } catch (error) {
                return false;
            }
        };

        this.getIsTemporaryPassword = function () {
            try {
                return this._authData.password.isTemporaryPassword;
            } catch (error) {
                return false;
            }
        }

        this.setAuthData = function (authData) {
            this._authData = authData;
            localStorage.setItem('sessionService.authData', JSON.stringify(authData));
            return this;
        };

        /**
         * Destroy session
         */
        this.destroy = function destroy() {
            this.setAuthData(null);
        };

    }


})();