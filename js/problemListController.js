'use strict';


var problemListApp = angular.module('problemListApp', []);
//var problemListApp = module('problemListApp', []);


problemListApp.controller('ProblemListController', function ProblemListController($scope) {
	$scope.problems = [
		{'title' : 'title1', 'text' : 'title1text'}
	];
});

/*
function ProblemListController($scope) {
    $scope.problems = [
		{'title' : 'title1', 'text' : 'title1text'}
	];
}
*/