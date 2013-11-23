/*global define*/
define([
  'angular',
], function (ng, notImplemented) {
  var initialize = function (ng) {
    // notImplemented();
    console.log('bootstrapping!');
    // ng.bootstrap('app', []);
    ng.element(document).ready(function (){
      ng.bootstrap(document, ['CAPPS']);
      console.log('bootstrapping!');
    });
  };
});
