//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(210, 250, 210); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  let cloudstart = 80

  
  strokeWeight(0)
  ellipse(60,50,40,40)
  ellipse(80,30,40,40)
  ellipse(90,60,40,40)
  ellipse(110,30,40,40)
  ellipse(120,60,40,40)
  ellipse(140,40,40,40)

  strokeWeight(1)
  
  //DrawCatHead(100,100)

}

function DrawCatHead(headX,headY) {

  //EARS
  let earYinner = headY-5
  let earYouter = headY-30
  let earYtip = headY-45
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

  stroke(0)

  //EARS
  fill(50) //brown colour 176, 110, 67
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
  fill (165, 252, 162)
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
  fill(255, 138, 140, 100) //transparent bluish colour
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
  
}