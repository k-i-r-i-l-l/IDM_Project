import gab.opencv.*; 
import processing.video.*; 
import java.awt.Rectangle;
 
Capture cam; 
OpenCV detection; 
Rectangle[] faces;
boolean[] arrest;
String[] dangerous = { "Yes", "High", "No", "Normal", "Low"};
int on = 0;


// JSON data
JSONObject values;
JSONObject gender;
JSONObject age;
JSONObject ethnicity;
JSONArray hobbies;

//Times for the recording flashing 
int time_frame = 500;
int time_stamp = 0;
boolean record = true;

//Classifier
int min_time = 10000; // in ms
int max_time = 20000; // in ms
int time_select = (int)random(min_time, max_time);

int stamp = 0;
boolean show_status = true;

int rand;
int rand_name;

//resize the image 
void setup() { 
  size(1400, 720); 
  background (0, 0, 0); 
  println(Capture.list());
  cam = new Capture( this, 1280, 720, 30); 
  //cam = new Capture( this, 1280, 720, "name=USB Camera", 30); 
  cam.start(); 
  detection = new OpenCV(this, cam.width/2, cam.height/2); 
  detection.loadCascade(OpenCV.CASCADE_FRONTALFACE);
  //faces = null; // yeh ok set it to null if you like
  rand = (int)random(dangerous.length);
}
 
void draw() { 
  background (0, 0, 0);
  PImage p = cam.get();
  p.resize(cam.width/2, cam.height/2);
  detection.loadImage(p);  
  faces = detection.detect(); //init the faces array - its now no longer null
  image(cam, 0, 0);
  noStroke();
  rect(1000,0,400,720);
  
  if (faces!=null) { 
    for (int i=0; i< faces.length; i++) { 
      
      //stroke(0); 
      //fill(0);
      //rect(1000,0,400,720);
      noFill(); 
      stroke(255, 0, 0); 
      strokeWeight(5); 
      rect(faces[i].x*2, faces[i].y*2, faces[i].width*2+20, faces[i].height*2+20);
      textAlign(CENTER); 
      fill(255, 0, 0); 
      textSize(40);
      text("Suspect", faces[i].x*2-30, faces[i].y*2-30);
      textSize(20);
      text("Recording", 930, 20);
      textAlign(LEFT);
      //text("Dangerous?", faces[i].x+160, faces[i].y+150);
      
      //text(name[rand_name], faces[i].x+325, faces[i].y+190); // bugged,m doesnt change

      //JSON DATA Q1
      values = loadJSONObject("myjsonfile.json");
       String names = values.getString("name");
       
       if (names!= null){
          textSize(30);
          noStroke();
          //fill(180,180,180, 180);
          String n = "Name :";
          float nw = textWidth(n+names);
          //rect(5,5,nw+10,25);
          fill(250);
          text ("Name: "+ names, 1020, 45);
          fill(0); // delete later
        }
      

      //JSON DATA Q2
      gender = loadJSONObject("myjsonfileq2.json");
    
      String genders = gender.getString("gender");
      //println(genders.getClass().getName());
  
      if (genders!= null){
        if (genders.equals("male")) {
            //println(genders);
            textSize(30);
            noStroke();
            //fill(180,180,180,180);
            //float gw = textWidth("Probably likes girls");
            //rect(5,35,gw+10,25);
            textSize(20);
            fill(250);
            text ("Probably likes girls", 1020, 85);
          }
          else if (genders.equals("female")) {
            //println(genders);
            noStroke();
            //fill(180,180,180,180);
            //float gw = textWidth("Probably likes boys");
            //rect(5,35,gw+10,25);
            textSize(20);
            fill(250);
            text ("Probably likes boys", 1020, 85);
          }
          else if (genders.equals("Other")){
            noStroke();
            //fill(180,180,180,180);
            //float gw = textWidth("Doesn't believe in binary genders");
            //rect(5,35,gw+10,25);
            textSize(20);
            fill(250);
            text ("Doesn't believe in binary genders", 1020, 85);
          } else if (genders.equals("")){
          }
          else {
          println("Why Im here");
         }
      };
        
      //JSON DATA Q3
      age = loadJSONObject("myjsonfileq3.json");
    
      String ages = age.getString("generation");
      //println(genders.getClass().getName());
      println(ages);
      if(ages!= null){
      if (ages.equals("genZ")) {
          
          noStroke();
          textSize(20);
          fill(250);
          text ("Very individualistic and is always in the phone", 1020, 115, 370, 60);
        } else if (ages.equals("millenial")) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Entiteled and lazy. Only wants to travel", 1020, 115, 370, 60);
        } else if (ages.equals("genX")) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Cynical and very bad at team work", 1020, 115, 370, 60);
        } else if (ages.equals("babyBoomer")) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Woraholic and selfrightious. At the top of its career", 1020, 115, 353, 60);
        }else if (ages.equals("silentGen")) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Doesn't know how to use a computer or a phone", 1020, 115, 370, 60);
        } else if (ages.equals("")){
        } else {
        println("Why Im here");
       }
      }
       
       //JSON DATA Q4
       
       /*JSONArray hobbies;

        hobbies = loadJSONArray("myjsonfileq4.json");

        for (int n = 0; n < hobbies.size(); n++) {
          
          JSONObject selectedHobbie = values.getJSONArray(n); 
      
          
          String hobbie = selectedHobbie.getString("hobbie");
          
          println(hobbies);
        };
        */
        /*
        hobbies = loadJSONArray("myjsonfileq4.json");

        for (int j = 0; j < hobbies.size(); j++) {
        
        JSONObject name = hobbies.getJSONObject(j);
    
        String hobbie = name.getObject("hobbies");
        println(hobbie);
      }*/
      
      //JSON DATA Q5
      ethnicity = loadJSONObject("myjsonfileq5.json");
    
      String ethnicities = ethnicity.getString("ethnicity");
      //println(genders.getClass().getName());
      //println(ethnicities);
      //println(ages);
      if(ethnicities!= null){
        if (ethnicities.equals("white")) {
          noStroke();
          textSize(20);
          fill(250);
          text ("Level of danger: Threat! Racist", 1020, 175, 370, 60);
          if (on == 0 && frameCount% 6== 0){
            fill(0);
            on = 1;
            //println("reading this");
          } else {
            textSize(120);
            String a = "Dangerous";
            float d = textWidth(a);
            fill(150, 150, 150, 180);
            //rect(40, 150, d+40, 130);
            rect(170, 300, d+40, 130);
            fill(255, 0, 0);
            text(a,180,400,800);
            on = 0;
            fill(0);
          //println("reading the else");
        }
        } else if (ethnicities.equals("Asian")) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Safe! Good at maths and very workaholic", 1020, 175, 370, 60);
        } else if ((ethnicities.equals("hispanic"))  && (ages.equals("millenial")) && (genders.equals("male")) ||  (ethnicities.equals("hispanic"))  && (ages.equals("genZ")) && (genders.equals("male")) ) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Threat! High chances of being a drug dealer", 1020, 175, 370, 60);
        } else if ((ethnicities.equals("hispanic"))  && (ages.equals("millenial")) && (genders.equals("female")) ||  (ethnicities.equals("hispanic"))  && (ages.equals("genZ")) && (genders.equals("female"))) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Safe! Very good for dancing or partying", 1020, 175, 370, 60);
        } else if ((ethnicities.equals("hispanic")) ) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Threat! High chances of being a ilegal inmigrant", 1020, 175, 370, 60);
        } else if ((ethnicities.equals("african")) && (ages.equals("millenial")) && (genders.equals("male")) ||  (ethnicities.equals("african"))  && (ages.equals("genZ")) && (genders.equals("male")) ) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Threat! High of being violent and having a gun", 1020, 175, 353, 60);
        } else if ((ethnicities.equals("african")) && (genders.equals("female"))  ) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Level of danger: Low! Chances of having economic problems, isn't eligable for a loan", 1020, 175, 353, 60);
        } else if (ethnicities.equals("irish")) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Level of danger: Safe! Alcoholic and funny. LOVES Guiness", 1020, 175, 370, 60);
        } else if (ethnicities.equals("chinese")) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Unkown! Might be a spy for the Communsit party or have deflected", 1020, 175, 353, 60);
        } else if (ethnicities.equals("indian")) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Must consider the sex", 1020, 175, 353, 60);
        } else if ((ethnicities.equals("arabic")) && (genders.equals("male"))) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Level of danger: Threat! High chances of being radicalized", 1020, 175, 353, 60);
        } else if ((ethnicities.equals("arabic")) && (genders.equals("female"))) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Level of danger: Low! High chances of being oppressed", 1020, 175, 353, 60);
        } else if (ethnicities.equals("westEuropean")) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Safe!", 1020, 175, 353, 60);
        } else if (ethnicities.equals("eastEuropean")) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Unkown", 1020, 175, 353, 60);
        } else if ((ethnicities.equals("eastEuropean")) && (genders.equals("female"))) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Level of dange: Imprecise! ", 1020, 175, 353, 60);
        } else if (ethnicities.equals("mixed")) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Unkown", 1020, 175, 353, 60);
        } else if (ethnicities.equals("other")) {
          textSize(20);
          noStroke();
          fill(250);
          text ("Unkown", 1020, 175, 353, 60);
        } else if (ethnicities.equals("")){
          textSize(20);
          noStroke();
          fill(250);
          text ("Unkown", 1020, 175, 353, 60);
        } else {
        println("Why Im here");
       }
      }
     

      //Flashing in recording
      int time_passed = millis() - time_stamp;  //keeps track of the times passed 
      if (time_passed < time_frame && record) 
      {
        fill(255, 0, 0);
        ellipse (865,13,10,10);
        fill(0);
      }
      else if (time_passed >= time_frame)
      {
        time_stamp = millis();  //sets the time_span to the beggining
        //time_frame = (int)random(min_time, max_time); //reinitialices the time_frame from the begginig
        record = !record;
      }
      
      //Have the status change after a few minutes
      /*int time_status = millis() - stamp;
      if (time_status < time_select && show_status) {
        fill(255, 0, 0);
        textAlign(LEFT);
        String status = score;
        textSize(20);
        fill(0);
        text(status, faces[i].x+275, faces[i].y+150);
        //if (rand != [0]) {
          //println("YES");}
      } else if (time_status >= time_frame) {
        stamp = millis();
        time_status = (int)random(min_time, max_time);
        show_status = !show_status;
        //rand = (int)random(dangerous.length);
        fill(0);
        //display();
      }
      else {
        fill(0);
        textAlign(LEFT);
        textSize(20);
        //text("NEW SCORE!", faces[i].x+275, faces[i].y+150);
      } */
    }
  } 
  
  if (faces.length<=0) { 
    textAlign(CENTER); 
    fill(0); 
    textSize(40); 
    text("NO SUSPECT FOUND", 320, 220);
  }

}

void captureEvent(Capture cam) { 
  cam.read();
}

String textWrite;
void statusWrite(){
      int time_passed = millis() - time_stamp;  //keeps track of the times passed 
      if (time_passed < time_frame && record) 
      {
        fill(255, 0, 0);
        textSize(120);
        text("Dangerous", 50,150,800);
        //fill(0);
        //fill(255);
      }
      else if (time_passed >= time_frame)
      {
        time_stamp = millis();  //sets the time_span to the beggining
        //time_frame = (int)random(min_time, max_time); //reinitialices the time_frame from the begginig
        record = !record;
      }
    }; 