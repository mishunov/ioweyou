'use strict';

/**
 * @ngdoc function
 * @name ioweyouApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ioweyouApp
 */
angular.module('ioweyouApp')
    .controller('MainCtrl', function ($scope) {
        $scope.todos = [];
        $scope.addTodo = function () {
            if($scope.todo) {
                $scope.todos.unshift($scope.todo);
                $scope.todo = '';
            }
        };
        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };
    });
