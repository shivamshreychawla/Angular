'use strict';
//commonhttpServicesModule
var app = angular.module('commonhttpServicesModule', ["ngResource"]);

// common factory to call WCF service

app.factory('commonhttpServices', function ($http, $q,SaveEntityService) {
    return {
        AuthenticateUser: function (param) {
            var deferred = $q.defer();
            $http({
                url: getServiceNameUrl("userManagement","AuthenticateUser"),
                method: "POST",
                data: param, //Data sent to server
                contentType: "application/json; charset=utf-8",
                dataType: "json"
            }).success(function (data) {
                var res = angular.fromJson(data);
                if(data.ServicePayload.Errors != null && data.ServicePayload.Errors.length >0)
                {
                    deferred.reject();
                }
                else
                {
                    SaveEntityService.setUserDetails(data.ServicePayload);
                    deferred.resolve(data);
                }
                
            }).error(function (e) {
                deferred.reject();
            });
            
            return deferred.promise;
              }              
           }
});



/*app.factory('SaveEntityService', function () {
    return {
        UserDetails: this.UserDetails,
        setUserDetails: function (user) {
            this.UserDetails=user;
        }
    };
});*/

app
  .service('SaveEntityService', function($rootScope,$window){
    var text = 'Initial state';

    $window.rootScopes = $window.rootScopes || [];
    $window.rootScopes.push($rootScope);

    if (!!$window.sharedService){
      return $window.sharedService;
    }

    $window.sharedService = {
        setUserDetails: function (user) {
            this.UserDetails=user;
            angular.forEach($window.rootScopes, function(scope) {
          if(!scope.$$phase) {
              scope.$apply();
          }
        });
        },
      change: function(newText){
        text = newText;
        angular.forEach($window.rootScopes, function(scope) {
          if(!scope.$$phase) {
              scope.$apply();
          }
        });
      },
      get: function(){
        return text;
      },
      getUserDetails: function(){
        return this.UserDetails;
      },
      UserDetails: this.UserDetails
    }

    return $window.sharedService;
  });

/*app.factory('UserDetailsData', function () {
    return {
        UserDetails: {
            username: '',
            userid: '',
            email: ''
        },
        setUserDetails: function (uname, uid, uemail) {
            this.UserDetails.username = uname;
            this.UserDetails.userid = uid;
            this.UserDetails.email = uemail;
        }
    };
});*/


