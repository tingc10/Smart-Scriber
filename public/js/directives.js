angular.module("SmartScribe.directives", [])
.directive("meetingCreator", ['LicodeService', function(LicodeService){
	return {
		restrict: 'A',
		templateUrl: '../templates/meeting-creator.html',
		link: function(scope, element, attrs) {
			scope.meetingInfo = {};
			scope.joinRoom = function(){
				var roomJoinSuccess = LicodeService.joinRoomWithName(meetingInfo.roomName, meetingInfo.userName);
				if(roomJoinSuccess) {
					scope.roomJoined = true;
				} else {
					console.log("Error: Failed to join room");
				}
			}
		}
	}
}]);