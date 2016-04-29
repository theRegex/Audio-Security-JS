var hdio = angular.module('casestudy',[]);


hdio.controller('trackFactor', ['$scope','$q', function($scope,$q){
$scope.wavesurfer = WaveSurfer;
$scope.loaded = false;

	$scope.ids = [];

	$scope.players = [];





	$scope.tracks = [
	 {
   	name: "Pop Mix",
   	source:"tracks/333565.mp3"
   },
    {
   	name: "Rock Mix",
   	source: "tracks/333565.mp3"
   },
    {
   	name:"Rap Mix",
   	source:"tracks/333565.mp3"
   }


	]





	$scope.begin = function(tracklist){
		var defer = $q.defer();
	tracklist = $scope.tracks;
	$scope.buidUID(tracklist);
	$scope.buildOffTrackList(tracklist)
	 $scope.$on('doneLoading', $scope.pushPlayer)

	
	}



	$scope.buidUID = function(trks){
		for(var i  = 0 ; i < trks.length; i++){
		var enlock = btoa($scope.tracks[i].name);
		var finalID = enlock.slice(0,-2);
		$scope.ids.push(finalID + i);
	}

	}

	$scope.buildOffTrackList = function(trks){
		for(var i  = 0 ; i < trks.length; i++){
			$scope.players[i] = Object.create($scope.wavesurfer);
		}



	}

	$scope.pushPlayer = function(){





			var playerType = {
        container: null,
        backend:"WebAudio",
        barWidth: 4,
        fillParent: true,
        pixelRatio: 1,
        waveColor: "blue"
      
	}
		for(var player = 0; player < $scope.players.length ; player++){
	
		playerType['container'] = "#" + $scope.ids[player]
		$scope.players[player].create(playerType);


	}










}






$scope.addToPlayer = function(){

$scope.players[player].load('tracks/333565.mp3');
}

	$scope.action = function(obj,act){

		switch (act) {
	    case "play":
	        obj.play();
	        break;
	    case "pause":
	        obj.pause();
	        break;
	    case "stop":
	        obj.stop();
	        break;

	    default:
	    console.log(obj)
	}



	}

$scope.begin();



	
	}])


hdio.directive('notiWatch',function(){
	// Runs during compile
	return {
		restrict: 'A',
		controller: 'trackFactor',
		link: function($scope, element, attrs,cntrl) {
			 if ($scope.$last){
       $scope.$emit('doneLoading');
    }
		}
	};
});