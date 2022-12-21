img = "";
status = "";
objects = "";
percent = "";

function setup() {
    canvas = createCanvas(640,420);
    canvas.center()
    objectDectector = ml5.objectDectector('cocossd', modelLoaded);
}
function preload() {
    img = loadImage('bed.png');
}
function draw() {
    if(status != "")
    {
       for (i = 0; i < objects.length; i++) {
           document.getElementById("status").innerHTML = "Status : Object Detection";
   
           fill("#FF0000");
           percent = floor(objects[i].confidence * 100);
           text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
           noFill();
           stroke("#FF0000");
           rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       }
    }
   }
function modelLoaded() {
    console.log("model Loaded!")
    status = true;
    objectDectector.detect(img, gotResults);
}
function gotResults(error, results){
if (error) {
    console.log(error);
}
console.log(results);
objects = results;
}
