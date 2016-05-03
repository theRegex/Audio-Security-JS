var hdio = angular.module('casestudy', []);


hdio.controller('trackFactor', ['$scope', '$q', '$compile', '$timeout', function($scope, $q, $compile, $timeout) {

    $scope.heardIO = HeardPlayer();

    $scope.loaded = false;

    $scope.ids = [];

    $scope.players = [];





    $scope.tracks = [{
            name: "Pop Mix",
            source: "tracks/333565.mp3"
        }, {
            name: "Rock Mix",
            source: "tracks/333565.mp3"
        }, {
            name: "Rap Mix",
            source: "tracks/333565.mp3"
        }


    ]





    $scope.begin = function(tracklist) {

        var defer = $q.defer();
        tracklist = $scope.tracks;
        $scope.buidUID(tracklist);
        $scope.buildOffTrackList(tracklist)
        $scope.$on('doneLoading', $scope.pushPlayer)


    }



    $scope.buidUID = function(trks) {
        for (var i = 0; i < trks.length; i++) {
            var enlock = btoa($scope.tracks[i].name);
            var finalID = enlock.slice(0, -2);
            $scope.ids.push(finalID + i);
        }

    }

    $scope.buildOffTrackList = function(trks) {
        for (var i = 0; i < trks.length; i++) {
            $scope.players[i] = Object.create(HeardPlayer())
        }



    }

    $scope.pushPlayer = function() {
        $timeout(function() {
            for (var i = 0; i < $scope.players.length; i++) {
                var controls = "controls" + i;
                console.log($scope.ids[i])
                $scope.players[i].init($scope.ids[i], controls, $scope.tracks[i].source)
            }

        })

    }

    $scope.begin();




}])
