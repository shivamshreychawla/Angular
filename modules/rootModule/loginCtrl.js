(function () {
'use strict';
angular.module('ladbrokesMercury')
.controller('loginCtrl', 
	['commonhttpServices','$scope','$location','$window', function (commonhttpServices,$scope,$location,$window) {

	$scope.username="Sapient1";
	
	$scope.authenticateUser=function(){
		
$window.location.href = "workspace.html";
		//var data = {"ConsumerContext":{"BaseEventClassId":"","Errors":"","IsError":"false","DeviceInfo":"","RequestChannel":"","SubSystemId":"10.224.247.20","SystemContext":"","SystemID":"","TransactionID":"4f1c802c-0bdf-45da-b30c-c8c873351b89","UserId":"","UserName":$scope.username},"ServicePayload":{"BaseEventClassId":"3","Errors":"","IsError":"false","BadPasswordCount":"0","CurrentWorkspace":"","DisplayName":"","DistinguishedName":"","Domain":"","Email":"nagarwal@sapient.com","ExtraPermissions":"","FirstName":"","GlobalMenuItemList":"","InvalidLogonMessage":"","IsAccountLocked":"false","IsActivated":"false","IsLoggedIn":"false","IsSysAdmin":"false","IsUserLoggedInBefore":"false","LastName":"","Password":$scope.Password,"PrimaryMenuItemList":"","RoleList":"","SelectedSportID":"3","ShortName":"","UserAudit":"","UserGroupList":"","UserGroupName":"","UserID":"0","UserName":$scope.username,"UserSecurityToken":""}};
		//var user = angular.toJson(UserAdaptor($scope.username,$scope.password),true);
		//$scope.service = "userManagement";
		//$scope.operation="AuthenticateUser";
		//commonhttpServices.AuthenticateUser(user).then(function (data) 
			/*{
				//alert(data);
				// $location.path('/eventclass');
				//$rootScope.$broadcast('userDetail', data);
				//$rootScope.UserDetails = data;
				$window.location.href = "workspace.html";
			});*/
	};

	function UserAdaptor(username,password)
	{
		var serviceRequest = new TradingServiceRequest();
		var user = new User();
		user.UserName = username;
		user.Password = password;
		user.SelectedSportID = "3";
		user.BaseEventClassId = "3";

		serviceRequest.ServicePayload = user;
		serviceRequest.ConsumerContext = new ConsumerContext();
		serviceRequest.ConsumerContext.UserName = username;
		serviceRequest.ConsumerContext.TransactionID=CreateGuid();

		return serviceRequest;
	}
}])
})();
