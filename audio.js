  document.addEventListener("DOMContentLoaded", function(event) {
   var tracks = [
   {
   	name: "Pop Mix",
   	src: "tracks/333565.mp3"
   },
    {
   	name: "Rock Mix",
   	src: "tracks/333565.mp3"
   },
    {
   	name: "Rap Mix",
   	src: "tracks/333565.mp3"
   },
]


  	var playerCanvas = {

  			container: "#waveform",
  			barWidth: 4,
  			fillParent: true,
  			pixelRatio: 1,
  			waveColor: "tomato"

  	}



  	var wavesurfer = WaveSurfer;





//  	var wavesurfer = WaveSurfer.create({}) <-- .create() takes in an object

  	//wavesurfer.load('tracks/333565.mp3');



function pushPlaylist(tracks){




}




  	wavesurfer.on('ready', function () {

    $(".ply").click(function(){

    	wavesurfer.play();
    })

    $(".stp").click(function(){

    	wavesurfer.stop();
    })

    $(".ps").click(function(){
    	wavesurfer.pause();
    })
});

  });



  //wavesurfer.pause(), wavesurfer.skipForward(), wavesurfer.toggleMute()