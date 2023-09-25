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
}

function draw() { 
  clear();

  flock.forEach(bird1 => {
    // Show and animate the current bird1
    bird1.show();
    bird1.animate();
  
    // Check for intersections with other birds
    flock.forEach(bird2 => {
      if (bird1 != bird2 && bird1.intersects(bird2)) {
          console.log("Intersection");
          //make the birds go up and have the same y and speed
          bird1.y-=1;
          bird2.y = bird1.y;
          bird2.speed = bird1.speed;
      }
    });
  });
  
}

function mouseClicked(){
  //on click, make a new instance of the bird and push it into the end of the flock array
  console.log("clicked");
  flock.push(new Sprite(animation, (mouseX-50), (mouseY-50), random(0,1, 1)));
}

function keyPressed(){
  if (key == ' '){ //this means space bar, since it is a space inside of the single quotes 
    flock.length = 0;
  }  
}


