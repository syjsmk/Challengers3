'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('AppCtrl', function ($scope, socket) {
        socket.on('send:name', function (data) {
            $scope.name = data.name;
        });
    }).
    controller('MyCtrl1', function ($scope, socket) {
        socket.on('send:time', function (data) {
            $scope.time = data.time;
        });
    }).
    controller('MyCtrl2', function ($scope) {
        // write Ctrl here
    }).
    controller('ProblemControl', function($scope) {
        $scope.problems = [{title:'asdf', description:'aaaa'}, {title:'bbbbb', description:'ssss'}];

        $scope.getProblems = function() {
            return $scope.problems;
        }
    })







