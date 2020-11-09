var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup(){
    createCanvas(400,400); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw(){
    background(100);

    stroke("white");
    strokeWeight(5);
    textSize(25)
    text(hr +" : "+mn+" : "+sc ,170,380);
    


    //Translation and rotation 
    translate(200,200)
    rotate(-90)

    //Calculating time 
    hr = hour();
    mn = minute();
    sc = second();

    //To create ab iterative rotation
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360)

    //drawing seconds hand
    push();
    rotate(scAngle); 
    stroke("pink");
    strokeWeight(3);
    line(0,0,100,0);
    pop()

    //drawing mins hand
    push();
    rotate(mnAngle);
    stroke("lightblue");
    strokeWeight(5);
    line(0,0,75,0);
    pop()



    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke("teal");
    strokeWeight(10);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    //drawing the arcs
    strokeWeight(10);
    noFill();
    //Seconds
    stroke("pink");
    arc(0,0,300,300,0,scAngle);
    //Minutes
    stroke("lightblue");
    arc(0,0,280,280,0,mnAngle);
    //Hour
    stroke("teal");
    arc(0,0,260,260,0,hrAngle);



}