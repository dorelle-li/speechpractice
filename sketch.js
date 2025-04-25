

// Mouse to draw!
let img;

function preload() {
  // Load the image
  img = loadImage("./img/priscilla.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  cnv.position(0,0);
  cnv.style('z-index','-2');
  cnv.style('position','absolute');
  imageMode(CENTER);
  background(0,0,0,0);

  // Set the background black
   background('#fae');
  
  // Image mode center will center the image on the mouse, comment out to see the difference

}

function draw() {

  // Draw an image at your mouse position
      tint(255, 80);
  image(img, mouseX, mouseY, 20,30);

}