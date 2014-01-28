describe('Testing a controller', function() {
    var $scope = null;
    var ctrl = null;

    beforeEach(module('myApp.controllers'));
    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('ProblemControl', {
            $scope: $scope
        });
      }));

    it('should have name Test', function() {
        expect($scope.problems[0].title).toEqual('asdf');
    });
})