/**
 * Created by gooch on 19/08/2016.
 */
(function(){

    function ecoPlatformHeaderDirective(){

        function Controller(){

            var logOut = function(){

                console.log("LOG OUT FUNCTION :: ");

            }

            //TODO -- theming options need to be implemented / rmeove logic from parent controller

            //Exports
            this.logOut = logOut;
            this.test = "test";

        }


        return {

            type : 'E',
            restricted : true,
            templateUrl : 'assets/js/dashBoard/header/ecoPlatHeader.tpl.html',
            controller   : Controller,
            controllerAs : 'vm'

        }

    }

    angular.module('materialism')
        .directive('ecoPlatformHeader',ecoPlatformHeaderDirective)
}())
