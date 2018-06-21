'use strict';

eventsApp.controller('EditEventController', function EventController($scope) {
    $scope.saveEvent = function(event)
    {
        window.alert('event' + event.name + 'saved');
    };

    $scope.cancelEvent = function()
    {
        window.location = "/EventDetails.html";
    };
});