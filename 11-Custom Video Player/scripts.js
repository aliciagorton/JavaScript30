// Get our elements 
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[dat-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build our functions 
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    // if(video.paused) {
    //     video.play();
    // }else {
    //     video.pause();
    // }
}

// listen for the cause of the pause 
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    // console.log("It ran");
    console.log(icon);
    toggle.textContent = icon;
    // toggle.textContent = this.paused ? '►' : '❚ ❚';
}

// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);