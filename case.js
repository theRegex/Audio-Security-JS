var hdio = angular.module('casestudy',[]);


hdio.controller('trackFactor', ['$scope', function($scope){
$scope.wavesurfer = WaveSurfer;


	$scope.ids = [];

	$scope.players = [];


	$scope.playerType = {


        container: "#waveform",
        backend:"WebAudio",
        barWidth: 4,
        fillParent: true,
        pixelRatio: 1,
        waveColor: "blue"
      
	}



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
	tracklist = $scope.tracks;
	$scope.buidUID(tracklist);

	}

	$scope.getTracks = function(){

	}

	$scope.buidUID = function(trsk){
		for(var i  = 0 ; i < trsk.length; i++){
		var enlock = btoa($scope.tracks[i].name);
		var finalID = enlock.slice(0,-2);
		$scope.ids.push(finalID + i);
	}

	}

	$scope.buildOffTrackList = function(){



	}

	$scope.assignUID = function(){


	}

	$scope.bindEvents = function(){


	}

$scope.begin();



	
	}])
