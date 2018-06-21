// (function() {
//     'use strict';

//     angular
//         .module('eventsApp')
//         .controller('EventController', ControllerController);

//     ControllerController.$inject = ['$scope'];
//     function ControllerController($scope) {
//         // var vm = this;
        

//         // activate();

//         // ////////////////

//         // function activate() { }
//     }
// })();


'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $log, $routeParams) {
    $scope.sortorder = 'name';
    // eventData.getEvent(function(event)
    // {
    //     $scope.event = event;
    // });

    //return promise
    // eventData.getEvent()
    // .success(function(event){$scope.event = event;})
    // .error(function(data,status,headers, config)
    // {
    //     $log.warn(data,status,headers(), config);
    // })

    $scope.event = eventData.getEvent($routeParams.eventId);
    $scope.upVoteSession = function(session)
    {
        session.upVoteCount++;
    };
    $scope.downVoteSession = function(session)
    {
        session.upVoteCount--;
    }
});