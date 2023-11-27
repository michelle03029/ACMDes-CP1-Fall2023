var a=0;
var b=100;
var c=700;
var d=420;
var e=700;
var f=240;
var g=650;
var h=70;
var j=200;
var k=650;
var R=10;
var G=255;
var B=0;
var speed=1;
var deg=0;

function setup() { 
  createCanvas(700, 450);   
} 

function draw() { 
  background(204, 238, 255);
    //flowers circle
    
  var mX = mouseX - a;
  var mY = mouseY;
  
  R=map(mouseX,0,700,0,255);
  G=map(mouseY,0,450,0,255);
  B=map(mouseY,700,0,255,0);
  
  if ((mX+450)<30 && (mX+450)>-30 && mY<385&&mY>315){
  noStroke();
  fill (B, R, G,50);
  ellipse(a-450,350,90,100);
  } else{
  noStroke();
  fill(G, R, B,100);}
  ellipse(a-450,350,60,70);
  strokeWeight(4);
  stroke(B);
  line(a-450,385,a-450,450);  
 
  if ((mX+300)<30 && (mX+300)>-30 && mY<385&& mY>315){
  noStroke();
  fill (R, G, 255,40);
  ellipse(a-300,350,100,110);
  } else{
  noStroke();
  fill(242, G, R,100);}
  ellipse(a-300,350,60,70);
  stroke(R);
  strokeWeight(4);
  line(a-300,385,a-300,450);
  
  if ((mX+100)<35 && (mX+100)>-35 && mY<355&&mY>285){
  noStroke();
  fill (G, R, 255,120);
  ellipse(a-100,320,100,100);
  } else{
  noStroke();
  fill(R, G, 225,140);}
  ellipse(a-100,320,70,70);
  stroke(B);
  strokeWeight(4);
  line(a-100,355,a-100,450);
  
  if ((mX)<30 && (mX)>-30 && mY<355&&mY>285){
  noStroke();
  fill (B, 247, G,100);
  ellipse(a,350,100,100);
  } else{
  noStroke();
  fill(G, R, 242,60);}
  ellipse(a,350,60,60);
  stroke(R,G,B);
  strokeWeight(4);
  line(a,380,a,450);
  
  if ((mX-100)<40 && (mX-100)>-40 && mY<340&&mY>260){
  noStroke();
  fill (R, B, G,120);
  ellipse(a+100,300,120,120);
  } else{
  noStroke();
  fill(B, G, 242,130);}
  ellipse(a+100,300,80,80);
  stroke(153, 204, 0);
  strokeWeight(4);
  line(a+100,340,a+100,450);
      
  if (a>2*width){
    a=0;
  }
  a=a+0.3;
  
  // flower ellipse
  var mA = mouseX - b;
  var mB = mouseY;
  
  if ((mA+550)<30 && (mA+550)>-30 && mB<385&&mB>315){
  noStroke();
  fill (G, 247, B,130);
  ellipse(b-550,350,120,140);
  } else{
  noStroke(); 
  fill(B, G, 255,100);}
  ellipse(b-550,350,40,70);
  stroke(R,G,B);
  strokeWeight(4);
  line(b-550,385,b-550,450);
  
  if ((mA+350)<35 && (mA+350)>-35 && mB<355&&mB>285){
  noStroke();
  fill (R, 247, B,130);
  ellipse(b-350,320,100,130);
  } else{
  noStroke();
  fill(B, R, G,200);}
  ellipse(b-350,320,50,70);
  stroke(R,G,B);
  strokeWeight(4);
  line(b-350,355,b-350,450);
  
  if ((mA+250)<50 && (mA+250)>-50 && mB<310&&mB>190){
  noStroke();
  fill (230, R, G,130);
  ellipse(b-250,250,120,140);
  } else{
  noStroke();fill(179, B, G,100);}
  ellipse(b-250,250,100,120);
  stroke(B,G,B);
  strokeWeight(4);
  line(b-250,305,b-250,450);
  
  if ((mA)<10 && (mA)>-10 && mB<380&&mB>320){
  noStroke();
  fill (230, G, 255,100);
  ellipse(b,350,100,120);
  } else{
  noStroke();
  fill(R, 225, B,100);}
  ellipse(b,350,80,100);
  stroke(G,G,B);
  strokeWeight(4);
  line(b,380,b,450);
  
  if ((mA-100)<40 && (mA-100)>-40 && mB<345&&mB>255){
  noStroke();
  fill (B, R, B,100);
  ellipse(b+100,300,130,150);
  } else{
  noStroke();
  fill(R, G, B,100);}
  ellipse(b+100,300,100,130);
  stroke(R,G,B);
  strokeWeight(4);
  line(b+100,345,b+100,450);
  
  if (b>1.5*width){
  b=0;
  }
  b=b+1;
 
  

  if(c<0||d<0){
    speed=-0.3;}
  if(c>width||d>height){
  speed=2;
  }
  c=c+random(-speed);
  d=d+random(-speed);
  
  if(c>width||d>height){
  speed=2 
  }
  
  bee(c,d);

  }

  function bee(c,d){
    //wings
  fill(255,255,230,100);
  noStroke();
  ellipse(c,d,20,30);
  ellipse(c+15,d,20,30);
    //body
  fill(255, 255, 26);
  ellipse(c+5,d+20,55,35);
  fill(0);
  ellipse(c+5,d+20,5,35);
  ellipse(c+15,d+20,5,35);
    //head
  fill(217, 179, 140);
  ellipse(c-20,d+15,35,35);
    //eye
  fill(0);
  ellipse(c-27,d+15,8,8);
   
    
  e=e+random(-0.2);
  f=f+random(-0.1);
  bee1(e,f);
  
  function bee1(e,f){
    //wings
  fill(255,255,230,100);
  noStroke();
  ellipse(e,f,20,30);
  ellipse(e+15,f,20,30);
    //body
  fill(255, 255, 26);
  ellipse(e+5,f+20,45,25);
  fill(0);
  ellipse(e+5,f+20,5,25);
  ellipse(e+15,f+20,5,25);
  
    //head
  fill(217, 179, 140);
  ellipse(e-20,f+15,30,30); 
    //eye
  fill(0);
  ellipse(e-27,f+15,8,8); 
    
  g=g+random(-0.6);
  h=h+random(-0.1);
  bee2(g,h);
  
  function bee2(g,h){
    //wings
  fill(255,255,230,100);
  noStroke();
  ellipse(g,h,20,30);
  ellipse(g+15,h,20,30);
    //body
  fill(255, 255, 26);
  ellipse(g+5,h+20,50,30);
  fill(0);
  ellipse(g+3,h+20,5,30); 
  ellipse(g+15,h+20,5,30); 
    //head
  fill(217, 179, 140);
  ellipse(g-20,h+15,35,35);
    //eye
  fill(0);
  ellipse(g-30,h+15,8,8);
    
    
  k=k+random(-0.3);
  j=j+random(-0.1);
  bee2(k,j);
  
  function bee2(k,j){
  //wings
  fill(255,255,230,100);
  noStroke();
  ellipse(k,j,20,30);
  ellipse(k+15,j,20,30);
  //body
  fill(255, 255, 26);
  ellipse(k+5,j+20,50,30);
  fill(0);
  ellipse(k+5,j+20,5,30);
  ellipse(k+15,j+20,5,30);
  //head
  fill(217, 179, 140);
  ellipse(k-20,j+15,35,35);
  //eye
  fill(0);
  ellipse(k-30,j+15,8,8);
  } 
    
  //bee 
  //wings
  fill(255,255,230,100);
  noStroke();
  ellipse(mouseX,mouseY,40,50);
  ellipse(mouseX+15,mouseY,40,50);
  //body
  fill(255, 255, 26);
  ellipse(mouseX+5,mouseY+20,60,40);
  fill(0);
  ellipse(mouseX+5,mouseY+20,8,35);
  ellipse(mouseX+20,mouseY+20,8,35);
  //head
  fill(217, 179, 140);
  ellipse(mouseX-20,mouseY+15,40,40);
  //eye
  fill(0);
  ellipse(mouseX-30,mouseY+15,8,8);
  
    //deg++;
 }   
}

  }