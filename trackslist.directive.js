hdio.directive('notiWatch',function(){
	// Runs during compile
	return {
		restrict: 'A',
		link: function($scope, element, attrs,cntrl) {
			 if ($scope.$last){
       $scope.$emit('doneLoading');
    }
		}
	};
});



hdio.directive('tracksList',function(){
	// Runs during compile
	return {
		restrict: 'E',
		templateUrl :'/Audio-Security-JS/track.html',
		link: function($scope, element, attrs,cntrl) {
    }
		}

});