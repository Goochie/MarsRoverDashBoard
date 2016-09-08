/**
 * Created with IntelliJ IDEA.
 * User: billgch
 * Date: 06/09/2016
 * Time: 17:57
 * To change this template use File | Settings | File Templates.
 */
(function(){

    function marsRoverControlDirective(){

        function Controller(marsRoverManger){

            var vm = this;

            vm.roverStatus = 'Waiting launch';

            vm.addRoverToMars = function(){

                marsRoverManger.addRoverToMars().then(function then(response) {

                    if (response.data.success) {
                        vm.roverStatus  = response.data.message;
                    }
                }).catch(function(response) {

                        vm.roverStatus  = response.data.message;

                }.bind(this))

            }

            vm.moveRoverLeft  = function(){

                marsRoverManger.moveLeft().then(function then(response) {

                    if (response.data.success) {
                        vm.roverStatus  = response.data.message;
                    }
                }).catch(function(response) {

                        vm.roverStatus  = response.data.message;;

                    }.bind(this))

            }

            vm.moveRoverRight = function(){

                marsRoverManger.moveRight().then(function then(response) {

                    if (response.data.success) {
                        vm.roverStatus  = response.data.message;
                    }
                }).catch(function(response) {

                        vm.roverStatus  = response.data.message;;

                    }.bind(this))

            }

            vm.moveRoverUp    = function(){

                marsRoverManger.moveUp().then(function then(response) {

                    if (response.data.success) {
                        vm.roverStatus  = response.data.message;
                    }
                }).catch(function(response) {

                        vm.roverStatus  = response.data.message;;

                    }.bind(this))
            }

            vm.moveRoverDown  = function(){

                marsRoverManger.moveDown().then(function then(response) {

                    if (response.data.success) {
                        vm.roverStatus  = response.data.message;
                    }
                }).catch(function(response) {

                        vm.roverStatus  = response.data.message;;

                    }.bind(this))

            }
        }


        return {

            type : 'E',
            restricted : true,
            templateUrl : 'assets/js/domain/marsRover/marsRoverControl.tpl.html',
            controller   : Controller,
            controllerAs : 'vm'

        }

    }

    angular.module('materialism')
        .directive('marsRoverControl',marsRoverControlDirective)
}())
