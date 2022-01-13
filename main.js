nosex=0;
nosey=0;
difference=0;
leftwrist_x=0;
rightwrist_x=0;


function preload(){

}

function draw(){

background("#1708bd");
document.getElementById("square_side").innerHTML="HEIGHT AND WIDTH OF SQUARE IS =" +difference +"PX";

fill("#e7fc03");
stroke("#fc0303");

square(nosex,nosey,difference);


}

function setup(){
    canvas=createCanvas(380,420);
 canvas.position(845,110);
 video=createCapture(VIDEO);
video.size(376,456);

poseNet= ml5.poseNet(video, modelloaded);
poseNet.on("pose",gotposes);
}

function modelloaded(){
    console.log("poseNet is intialized");

}

function gotposes(results){
if(results.length>0){
    console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log(nosey);
console.log(nosex);    
leftwrist_x=results[0].pose.leftWrist.x;
rightwrist_x=results[0].pose.rightWrist.y;
difference=floor(leftwrist_x-rightwrist_x);
console.log("Left wristx= " +leftwrist_x+"Right wristx= " +rightwrist_x);
console.log("Difference= " +difference);





}
}
