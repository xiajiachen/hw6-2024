var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.video');
    video.autoplay = false; 
    video.loop = false; 

    document.getElementById('play').addEventListener('click', function() {
        video.play();
        console.log('Volume:', video.volume * 100 + '%');
    });


    document.getElementById('pause').addEventListener('click', function() {
        video.pause();
    });

    document.getElementById('slower').addEventListener('click', function() {
        video.playbackRate *= 0.9;
        console.log('New speed:', (video.playbackRate * 100).toFixed(5) + '%');
    });


    document.getElementById('faster').addEventListener('click', function() {
        video.playbackRate /= 0.9;
        console.log('New speed:', (video.playbackRate * 100).toFixed(5) + '%');
    });

  
    document.getElementById('skip').addEventListener('click', function() {
        if (video.currentTime + 10 > video.duration) {
            video.currentTime = 0;
            console.log('Going back to start');
        } else {
            video.currentTime += 10;
        }
        console.log('Current location:', video.currentTime);
    });

    document.getElementById('mute').addEventListener('click', function() {
        video.muted = !video.muted;
        this.textContent = video.muted ? 'Unmute' : 'Mute';
    });

 
    document.getElementById('slider').addEventListener('input', function() {
        video.volume = this.value / 100;
        console.log('Volume:', this.value + '%');
    });

    document.getElementById('vintage').addEventListener('click', function() {
        video.classList.add('oldSchool');
    });


    document.getElementById('orig').addEventListener('click', function() {
        video.classList.remove('oldSchool');
    });
});
