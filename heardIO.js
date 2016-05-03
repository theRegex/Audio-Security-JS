var context = new AudioContext();

var HeardPlayer = (function(){

		var audio = new Audio();
		
	

	 	var canvas = document.createElement('canvas');

		var ctx = canvas.getContext('2d');

		var source = context.createMediaElementSource(audio); 

		var analyser =  context.createAnalyser();

		var bars = null;

		var fbc_array = null;

		var container = []; 
						
		var controllers = [];


		var init = function(x,y,track){
			audio.src = track;
			container[0] = document.getElementById(x);
			container[1] = document.getElementById(y);
			source.connect(analyser);
			analyser.connect(context.destination);
			container[0].appendChild(canvas)
			draw();
			buildControls();
			bindEvents();

		}

		var draw = function(){
			window.requestAnimationFrame(draw);
			fbc_array = new Uint8Array(analyser.frequencyBinCount);
			analyser.getByteFrequencyData(fbc_array);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.fillStyle = '#34495e';
			bars = 100;
			for (var i = 0; i < bars; i++) {
			bar_x = i * 3;
			bar_width = 2;
			bar_height = -(fbc_array[i] / 2);
			//  fillRect( x, y, width, height ) // Explanation of the parameters below
			ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
			

	}
			
		}

		var buildControls = function(){
			var play = document.createElement('li');
			controllers.push(play);
			controllers[0].id = "heard-play";
			controllers[0].className = "play-btn";

			var stop = document.createElement('li');
			controllers.push(stop);
			controllers[1].id = "heard-stop";
			controllers[1].className = "stop-btn";

			var bck = document.createElement('li');
			controllers.push(bck);
			controllers[2].id = "heard-bck";
			controllers[2].className = "back-btn";

			var ffw = document.createElement('li');
			controllers.push(ffw);
			controllers[3].id = "heard-ffw";
			controllers[3].className = "ffw-btn";


			var progressor = document.createElement('progress');
		
			controllers.push(progressor);
			controllers[4].value = 0;
			controllers[4].max = 100;
			controllers[4].id = "heard-progress";
			controllers[4].className = "h-progress";
			
			var controlsParent = document.createElement('ul');
			controllers.push(controlsParent);
			controllers[5].id = "heard-progress";
			controllers[5].className = "heard-controls-wrapper";

			container[1].appendChild(controllers[5]);
			controllers[5].appendChild(controllers[0]);
			controllers[5].appendChild(controllers[1]);
			controllers[5].appendChild(controllers[2]);
			controllers[5].appendChild(controllers[3]);

			container[0].appendChild(controllers[4]);


		}

		var bindEvents = function(){

			audio.addEventListener('timeupdate' , barUpdate)
			controllers[0].addEventListener('click', startAction)
			controllers[1].addEventListener('click', startAction)
			controllers[2].addEventListener('click', startAction)
			controllers[3].addEventListener('click', startAction)
						
		}


		var barUpdate = function(){

			controllers[4].value = 100 * audio.currentTime / audio.duration;
		}

		var startAction = function(e){

			switch(e.target.id){

				case "heard-play":

				audio.play();

				break;

				case "heard-stop":

				audio.pause();

				break;

				default:

				alert("action not yet registered : "  + e.target.id);


			}

		}
		







return {
	 init : init
}




});


console.log(Object.create(HeardPlayer()));