let w = 1

// line 71 is 

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);//DEVELOP_GLYPH, GRID_WALLPAPER, GLIDE_WALLPAPER
  pWallpaper.resolution(FIT_TO_SCREEN);//FIT_TO_SCREEN, NINE_PORTRAIT, NINE_LANDSCAPE
  pWallpaper.show_guide(true); //false, true

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

//  NOTES
//  background feature can only be used in wallpaper_background
//  comment on the parameter changes that AREN'T able to be displayed at the top

function wallpaper_background() {
  background(210, 250, 210); 
  //  default light green:   210, 250, 210
  //  light sky blue:  191, 206, 255
  //  stormy purple: 104, 97, 117
}

//  IDEAS 
//  theme: raining cats and dogs??
//  need to design dog head if im pursuing this idea
//  use IF statements to interchange between the 9 idfferent varaibles of the wallpaper
//  maybe too much clouds, or maybe can use many clouds vs. little clouds in different versions
//  experiment with angling and balance
//  a few of the wallpapers must include colour change: maybe clear skies to stormy??
//  maybe experiment in detailing of icons that are alrdy created: clouds,cat,?dog?

function my_symbol() { 
  angleMode(DEGREES)
 
  if(w == 1){
  drawCloud1(180,100,.5)
  drawCloud2(20,30,.7)  
  
  drawCloud2(100,180,.5)
  drawCloud1(130,110,)

  drawCloud2(150,250,.7)
  drawCloud1(30,220,.7)

  drawCloud2(500,100,.3)
    
  // drawCat(200,100,.5,45)
  // drawCat(100,200,.5,-45)
  } 

  else if (w == 2){  
  line(0,40,200,100)
  line(0,140,200,70)
  
  drawCloud1(330,80,.4,15)
  drawCloud1(140,130,.8,15)
  drawCloud2(20,50,1,15)
  drawCloud2(350,150,.5,15)
  
  //drawCat(230,300,.5)
  }

}

function drawCat(headX,headY,size,rotateCat) {
  
  //COLOURS
  let furColour = color(50)   //50        //252, 186, 3
  let eyeColour = color(165, 252, 162)  //165, 252, 162         //57, 207, 227
  let glassesColour = color(255, 138, 140, 100) //255, 138, 140, 100      //29, 138, 25,120

  //EARS
  let earYinner = headY-5
  let earYouter = headY-30
  let earYtip = headY-45 //45
  let earXinner = /*headx +- */ 45
  let earXouter = /*headx +- */ 10
  let earXtip = /*headx +- */ 55

  //NOSE AND MOUTH
  let nosetopY = headY+3
  let nosebottomY = headY+10
  let mouthcentreX = headX
  let mouthcentreY = headY+14
  let mouthendY = headY+20
  let mouthendX = 8
 
  //GLASSES
  let glassesY = headY
  let bridgeY = glassesY

  //EYES
  let eyeX1 = headX+10
  let eyeX2 = headX-10
  
  let eyeYupEnd = headY-13    // upper line end
  let eyeYlowEnd = headY-14   //lower line end
  
  let eyeYupper = headY-7     //  upper line start
  let eyeYlower = headY-8     //  lower line start
  
  let eyeCurveX1 = headX+30   //  inner curve control points in x direction
  let eyeCurveX2 = headX-30   //  outer curve control points in x direction
  
  let eyeCurveY1i = headY+40  //  inner curve control points in y direction
  let eyeCurveY2i = headY-80  
  let eyeCurveY1f = headY+80  //  outer curve control points in y direction
  let eyeCurveY2f = headY-80  

  //EYE DETAILS
  let pupilX = 23
  let pupilY = headY-10

  let eyeshineX1 = 3            //rounder eyeshine
  let eyeshineY1 = pupilY-1
  
  let eyeshineX2 = 7            //oblong eyeshine
  let eyeshineY2 = pupilY+2

  push()

  scale(size)
  rotate(rotateCat)
  stroke(0)

  //EARS
  fill(furColour) //brown colour 176, 110, 67
  triangle(headX-earXinner,earYinner,headX-earXouter,earYouter,headX-earXtip,earYtip)
  triangle(headX+earXinner,earYinner,headX+earXouter,earYouter,headX+earXtip,earYtip)
  
  //HEAD
  beginShape()
  curveVertex(headX,headY-30)
  curveVertex(headX,headY-38)
  curveVertex(headX+22,headY-33)
  curveVertex(headX+35,headY-25)
  curveVertex(headX+48,headY)
  vertex(headX+38,headY+20)
  curveVertex(headX,headY+34)
  vertex(headX-38,headY+20)
  curveVertex(headX-48,headY)
  curveVertex(headX-35,headY-25)
  curveVertex(headX-22,headY-33)
  curveVertex(headX,headY-38)
  curveVertex(headX,headY-30)
  endShape()
  
  //EYES
  fill (eyeColour)
  curve(eyeCurveX1, eyeCurveY1i, eyeX1, eyeYupper, headX+36, eyeYupEnd, headX+70, eyeCurveY1f);
  curve(eyeCurveX2, eyeCurveY2i, eyeX1, eyeYlower, headX+35, eyeYlowEnd, headX+10, eyeCurveY2f)
  curve(eyeCurveX2, eyeCurveY1i, eyeX2, eyeYupper, headX-36, eyeYupEnd, headX-70, eyeCurveY1f);
  curve(eyeCurveX1, eyeCurveY2i, eyeX2, eyeYlower, headX-35, eyeYlowEnd, headX-10, eyeCurveY2f)
  
  //EYE DETAILS
  fill(0)
  ellipse(headX-pupilX,pupilY,15,15)
  ellipse(headX+pupilX,pupilY,15,15)
  fill(255)
  stroke(255)
  ellipse((headX-pupilX)-eyeshineX1,eyeshineY1,8,8) 
  ellipse((headX+pupilX)-eyeshineX1,eyeshineY1,8,8) 
  ellipse((headX-pupilX)+eyeshineX2,eyeshineY2,5,2)
  ellipse((headX+pupilX)+eyeshineX2,eyeshineY2,5,2)

  stroke(0)
  
  //GLASSES
  fill(glassesColour) //transparent rose colour
  ellipse(headX-25,glassesY, 30,20)   
  ellipse(headX+25,glassesY, 30,20)
  line(headX-10,bridgeY,headX,bridgeY-5)
  line(headX+10,bridgeY,headX,bridgeY-5)
  
  //NOSE
  fill(255, 201, 246) //pinkish colour
  triangle (headX+5,nosetopY,headX-5,nosetopY,headX,nosebottomY); 
  
  //MOUTH
  line(mouthcentreX,mouthcentreY,mouthcentreX,nosebottomY)
  line(mouthcentreX,mouthcentreY,headX-mouthendX,mouthendY)
  line(mouthcentreX,mouthcentreY,headX+mouthendX,mouthendY)  

  pop()
}

function drawCloud1(cloudx1,cloudy1,csize,rotate1){
  push()
  rotate(rotate1)
  scale(csize)
  noStroke()
  rect(cloudx1+25,cloudy1-25,20,18, 35,35,5,5)
  rect(cloudx1+10,cloudy1-14,30,20, 35,35,5,60)
  rect(cloudx1+38,cloudy1-10,16,15, 35,40,5,5)
  ellipse(cloudx1+25,cloudy1+4,50,10)
  ellipse(cloudx1+40,cloudy1+4,50,10)
  //ellipse(cloudx1+20,cloudy1+3.5,30,10)
  pop()
}

function drawCloud2(cloudx2,cloudy2,csize2,rotate2){
  push()
  rotate(rotate2)
  scale(csize2)
  noStroke()
  rect(cloudx2,cloudy2,88,17, 35,35,5,5)
  rect(cloudx2+25,cloudy2-25,28,25, 35,35,5,5)
  rect(cloudx2+10,cloudy2-15,30,20, 35,35,5,5)
  rect(cloudx2+38,cloudy2-10,32,15, 35,40,5,5)
  pop()
}