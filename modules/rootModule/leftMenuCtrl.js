//----leftMenuCtrl
(function() {
	angular.module('ladbrokesMercury')
	.controller('leftMenuCtrl', ['$scope', function ($scope) {
		$scope.treedata=GetEventClass();

		$scope.showSelected = function(sel) {
                $scope.selectedNode = sel;
                PopulateChildNode($scope.selectedNode);
            };
	}])
})();