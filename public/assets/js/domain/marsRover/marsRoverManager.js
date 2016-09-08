/**
 * Author : Bill Gooch
 *
 *
 */
(function(){


    function marsRoverManger ($http,api){


        var publicAPI = {};


        //----------------------
        // ROVER API
        //-----------------------

        publicAPI.addRoverToMars = function(){

            return $http({ method: 'GET', url: api + 'addRover', withCredentials: true });

        }

        publicAPI.moveLeft = function(){

            return $http({ method: 'GET', url: api + 'moveLeft', withCredentials: true });

        }

        publicAPI.moveRight = function(){

            return $http({ method: 'GET', url: api + 'moveRight', withCredentials: true });

        }

        publicAPI.moveUp = function(){

            return $http({ method: 'GET', url: api + 'moveUp', withCredentials: true });

        }

        publicAPI.moveDown = function(){

            return $http({ method: 'GET', url: api + 'moveDown', withCredentials: true });

        }


        return publicAPI;

    }

    angular.module('materialism')
        .factory('marsRoverManger',marsRoverManger);

}())

