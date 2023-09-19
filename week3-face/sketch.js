// ml5 Face Detection Model
let faceapi;
let detections = [];

let currentPoint;
let bufferX;
let headShake = false;

// Video
let video;

function setup() {
  createCanvas(360, 270);

  // Creat the video and start face tracking
  video = createCapture(VIDEO);
  video.size(width, height);
  // Only need landmarks for this example
  const faceOptions = { withLandmarks: true, withExpressions: false, withDescriptors: false };
  faceapi = ml5.faceApi(video, faceOptions, faceReady);
}

// Start detecting faces
function faceReady() {
  faceapi.detect(gotFaces);
}

// Got faces
function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  detections = result;
  faceapi.detect(gotFaces);
}

function evaluateExpression(){
    const detectionsWithExpressions = await;
    faceapi.detectAllFaces(input).withFaceExpressions();
}

// Draw everything
function draw() {
  background(0);

  // Just look at the first face and draw all the points
  if (detections.length > 0) {
    let points = detections[0].landmarks.positions;
    currentPoint = points[0]._y;
    if(Math.abs(currentPoint-bufferX) > 10){
        headShake = true;
    }
    for (let i = 0; i < points.length; i++) {
      stroke(161, 95, 251);
      strokeWeight(4);
      point(points[i]._x, points[i]._y);
    }
    bufferX = currentPoint;
  }

  if(headShake){
    console.log("Head is shaking");
  }
}