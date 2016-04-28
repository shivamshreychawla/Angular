(function() {
"use strict";
//ladbrokesMercury will be the angular object of application, we will pass dependencies inside
var app=angular.module('ladbrokesMercury', [
    "commonhttpServicesModule",
    "treeControl",
    "ngRoute",
    "ui.router",
    "ui.bootstrap"
    ]);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/', 
    {
       templateUrl: 'modules/eventModule/eventClass.html',
       controller: 'eventClassCtrl'
    })
    /*.when('/login', {
        templateUrl: 'modules/rootModule/login.html',
        controller: 'loginCtrl'
    })*/
     .when('/eventclass', {
        templateUrl: 'modules/eventModule/eventClass.html',
        controller: 'eventClassCtrl',
        //resolve: resouce = commonhttpServices
        //resource :commonhttpServices
    })
    .otherwise({
        redirectTo: '/workspace.html'
    });
});

})();