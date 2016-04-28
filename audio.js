  document.addEventListener("DOMContentLoaded", function(event) {
   var wavesurfer = WaveSurfer;
   var $container = $(".row");
  
   var tracks = [
   {
   	name: "Pop Mix",
   	source: "tracks/333565.mp3"
   },
    {
   	name: "Rock Mix",
   	source: "tracks/333565.mp3"
   },
    {
   	name: "Rap Mix",
   	source: "tracks/333565.mp3"
   },
]

  var data = {

        container: "#waveform",
        backend: "WebAudio",
        barWidth: 4,
        fillParent: true,
        pixelRatio: 1,
        waveColor: "blue"
      

    };

var playerObjects = [];
// wavesurfer.init(data)
// wavesurfer.load('tracks/333565.mp3');

 
function pushContainer(){
}

var players = []

function initPlaylists() {
    for (var i = 0; i < tracks.length; i++){

        var data = {

        container: "#waveform-" + i,
        backend: "WebAudio",
        barWidth: 4,
        fillParent: true,
        pixelRatio: 1,
        waveColor: "blue"
      

    };


  $container.append('<div class="well"><div class="hd-audio" id="mediaHd"><div class="wave" id="waveform-'+ i +'"></div></div><div class="controls-content"><button type="button" data-track="'+ i +'"class="btn btn-default ply">Play</button><button type="button" data-track="'+ i +'" class="btn btn-default ps">Pause</button><button type="button" data-track="'+ i +'"class="btn btn-default stp">Stop</button></div></div>');

    players[i] = Object.create(WaveSurfer);
    players[i].init(data);
    players[i].load('tracks/333565.mp3');
}
}



initPlaylists()



//  	var wavesurfer = WaveSurfer.create({}) <-- .create() takes in an object

  var info = parseInt($("#waveform-1").attr("data-track"))

var lastPlayer = players[players.length-1];

  	lastPlayer.on('ready', function(){
      var currentTrack = null;
      $(".ply").click(function(){
        var currentTrack = parseInt($(this).attr("data-track"));
      players[currentTrack].play();
      })

       $(".ps").click(function(){
        currentTrack = parseInt($(this).attr("data-track"));
      players[currentTrack].pause();
      })


        $(".stp").click(function(){
        currentTrack = parseInt($(this).attr("data-track"));
      players[currentTrack].stop();
      })



  })

});
  //wavesurfer.pause(), wavesurfer.skipForward(), wavesurfer.toggleMute()}
