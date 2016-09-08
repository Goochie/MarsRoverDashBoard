/**
 * Created by gooch on 19/08/2016.
 */
    (function(){

        function ecoPlatformSideBarDirective(){

            function Controller($scope,$location){


            }


            return {

                type : 'E',
                restricted  : true,
                templateUrl : 'assets/js/dashBoard/nav/ecoPlatformSidebar.tpl.html',
                controller  : Controller

            }

        }

        angular.module('materialism')
            .directive('ecoPlatformSidebar',ecoPlatformSideBarDirective)
    }())


