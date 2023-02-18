function setup(){
    canvas=createCanvas(300,300);
    canvas.position(110,250);
     video=createCapture(VIDEO);
     video.hide();
   

}
function draw(){
    image(video,0,0,640,480);
     fill(255,0,0);
    stroke(255,0,0);
    circle(300, 300, 100);
    circle(10, 10, 100);
    circle(300, 10, 100);
    circle(10, 300, 100);
   
   
}


function take_snapshot(){
    save('img.png');
}
