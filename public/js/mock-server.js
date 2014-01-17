'use strict';

angular.module('problem-service', ['btford.socket-io']).
  factory('problem', function (socket) {
    var mockAsyncCallback = function (callback, args) {
      // FIXME: use $timeout.
      setTimeout('callback.apply(this, args)', 0);
    }
    return {
      getEntireList: function (callback) {
        mockAsyncCallback(callback, [
          {
            problemId: 1,
            title: 'An Easy Problem',
            description: 'Blah Blah'
          },
          {
            problemId: 2,
            title: 'A hard Problem',
            description: 'Blah Blah'
          }
        ]);
      }
    };
  });

