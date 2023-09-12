let birdRight;
let birdLeft;
let currentBird;
let otherBird;

// function preload() {
//   birdRight = loadImage('birdRight.png');
// }

function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(30);

  newCanvas = createGraphics(displayWidth, displayHeight);

  birdRight = new Sprite(mouseX,mouseY);
  birdRight.addAnimation('birdRight.png', { frameSize: [100,100], frames: 2 });
  
  birdLeft = new Sprite(mouseX,mouseY);
  birdLeft.addAnimation('birdLeft.png', { frameSize: [100,100], frames: 2 });

  birdLeft.overlaps(birdRight);
}

function draw() {
  // if mouse is moving left, show left facing bird, otheriwse show right facing bird
  clear();
  if(pmouseX>mouseX){
   currentBird = birdLeft;
   otherBird = birdRight;
  } else{
    currentBird = birdRight;
    otherBird = birdLeft;
  }  
  currentBird.moveTowards(mouse, 0.10);

}


//NOTES WEEK 1 and WEEK 2
//map function. making two sets of min-max equalized
//createGraphics(400,400) will make another layer. extracanvas.clear() will make it transparent. extra.Canvas.{whatever you want to make }

