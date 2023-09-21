let spritesheet;
let spritedata;

let animation = [];

let bird;
let flock = [];

function preload(){
  spritedata = loadJSON('bird.json');
  spritesheet = loadImage('birdRight.png');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  newCanvas = createGraphics(displayWidth, displayHeight);
  let frames = spritedata.frames;
  for(let i = 0; i < frames.length; i++){
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }

  //the number in the middle controls how many instances of the bird there will be
  //parameters are (animation, x, y, speed)
  for(let i = 0; i < 5; i++){
    flock[i] = new Sprite(animation, 0, i*80, random(0,1, 1));
  }
}

function draw() { 
  clear();
  for(let bird of flock){
    bird.show();
    bird.animate();
  }
}

function mouseClicked(){
  //on click, make a new instance of the bird and push it into the end of the flock array
  console.log("clicked");
  flock.push(new Sprite(animation, mouseX, mouseY, random(0,1, 1)));
}


