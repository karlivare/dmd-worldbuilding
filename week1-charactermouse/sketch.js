//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
var bird;

//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
// function preload() {

//   //create an animation from a sequence of numbered images
//   //pass the first and the last file name and it will try to find the ones in between
//   bird = loadAnimation('bird-down.png', 'bird-up.png');
// }

function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(30);
  bird = createSprite(0,0);
  bird.addAnimation('bird.png', { frameSize: [100,100], frames: 2 });
}

function draw() {
  clear();
  bird.velocity.x = (mouseX-bird.position.x +50 )/10;
  bird.velocity.y = (mouseY-bird.position.y -50 )/10;
}