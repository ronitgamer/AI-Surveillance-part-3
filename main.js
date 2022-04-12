objects=[];
video="";
Status="";
function preload(){
video=createVideo("video.mp4");
video.hide();


}


function setup(){
canvas=createCanvas(380,380);
canvas.center();

}

function draw(){
image(video,0,0,380,380);
if(Status !=""){

objectDetector.detect(video,gotResults);
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Status : Objects Detected";
document.getElementById("number_of_objects").innerHTML="Number of objects Detected=  "+objects.length;

fill("#FF0000");
percent=floor(objects[i].confidence*100);
text(objects[i].label+""+percent+"%"+objects[i].x,objects[i].y);
nofill();
stroke("#FF0000");
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}

function start(){
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
}

function modelLoaded(){
console.log("Model loaded!");
Status=true;
video.loop();
video.speed(1);
video.volume(0);
  
}

function gotResults(error,results){
if(error){
console.log(error);

console.log(results);
objects=results;
}



}