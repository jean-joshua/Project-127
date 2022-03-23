function draw() {
    image(video, 0, 0, 600, 500);
}

function preload() {
   song = loadSound("music.mp3");
}

song = "";

function setup() {
   canvas = createCanvas(600, 500);
   canvas.center(); 

   video = createCapture(VIDEO);
   video.hide();
}

function play() {
    song.play();
}