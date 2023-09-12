let mic, gif,img, currentDisplay;
let button = document.getElementById("button");

function preload() {
    gif = loadImage('assets/gtlichScreen.gif');
    img = loadImage('assets/alien.png');
    currentDisplay = gif;
}

function setup(){
    createCanvas(gif.width, gif.height);

    // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
    mic.start();

    //get consent for the mic
    button.addEventListener("click", ()=>{
        userStartAudio();
    })
}

function draw() {
    // button.addEventListener("click", ()=>{
    //     mic.play();
    // })
    background(255);
    image(currentDisplay, 0, 0);
    let vol = mic.getLevel();

    if(vol>0.09){
        currentDisplay = img;
    }else{
        currentDisplay = gif;
    }

    if(mouseIsPressed) {
        console.log("Working!");
        currentDisplay = img;
    }

    //boolean variable
//    print(mouseIsPressed);
//    if(mouseIsPressed===true){
//        currentDisplay = img;
//    }else{
//        currentDisplay = gif;
//    }
}

//function mouseReleased(){
//    currentDisplay = gif;
//}
