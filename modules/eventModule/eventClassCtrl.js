//----leftMenuCtrl
(function() {
	'use strict';
	angular.module('ladbrokesMercury')
	.controller('eventClassCtrl', 
		['$scope','$location','$rootScope','SaveEntityService', 
		function ($scope,$location,$rootScope,SaveEntityService) {
		
		$scope.PageName="Event Class Page";
		$scope.UserName = SaveEntityService.UserDetails.UserName;
		$scope.UserName = $scope.UserDetails.UserName;
		
		  $scope.$on('userDetail', function (event, user) { 
    			$scope.UserName = user.UserName;
  });
		
	}])
})();