//---HeaderController
(function() {
	angular.module('ladbrokesMercury')
	.controller('headerCtrl', ['$scope', function ($scope) {
		
		$scope.SelectedTab = 'E';

		$scope.nevigateto = function (selecteddata) {
        	$scope.SelectedTab=selecteddata;
    	};
    }
    ])
})();