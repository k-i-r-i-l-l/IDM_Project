import gab.opencv.*; 
import processing.video.*; 
import java.awt.Rectangle;
 
Capture cam; 
OpenCV detection; 
Rectangle[] faces;
boolean[] arrest;
String[] dangerous = { "Yes", "High", "No", "Normal", "Low"};


// JSON data
JSONArray values;

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


void setup() { 
  size(640, 480); 
  background (0, 0, 0); 
  cam = new Capture( this, 640, 480, 30); 
  cam.start(); 
  detection = new OpenCV(this, cam.width, cam.height); 
  detection.loadCascade(OpenCV.CASCADE_FRONTALFACE);
  faces = null; // yeh ok set it to null if you like
  rand = (int)random(dangerous.length);
}
 
void draw() { 
  detection.loadImage(cam); 
  faces = detection.detect(); //init the faces array - its now no longer null
  image(cam, 0, 0); 
 
  if (faces!=null) { 
    for (int i=0; i< faces.length; i++) { 
      noFill(); 
      stroke(255, 0, 0); 
      strokeWeight(5); 
      rect(faces[i].x-10, faces[i].y-10, faces[i].width+20, faces[i].height+20);
      textAlign(CENTER); 
      fill(255, 0, 0); 
      textSize(40);
      text("Suspect", faces[i].x-30, faces[i].y-30);
      textSize(20);
      text("Recording", 550, 20);
      textAlign(LEFT);
      text("Dangerous?", faces[i].x+210, faces[i].y+150);
      //text(name[rand_name], faces[i].x+325, faces[i].y+190); // bugged,m doesnt change

      //JSON DATA 
      values = loadJSONArray("myjsonfile.json");

      for (int j = 0; j < values.size(); j++) {
        
        JSONObject animal = values.getJSONObject(j); 
    
        String name = animal.getString("name");
        textSize(30);
        text ("Name: "+ name, 50, 400);
      }

      //Flashing in recording
      int time_passed = millis() - time_stamp;  //keeps track of the times passed 
      if (time_passed < time_frame && record) 
      {
        ellipse (485,13,10,10);
      }
      else if (time_passed >= time_frame)
      {
        time_stamp = millis();  //sets the time_span to the beggining
        //time_frame = (int)random(min_time, max_time); //reinitialices the time_frame from the begginig
        record = !record;
      }
      
      //Have the status change after a few minutes
      int time_status = millis() - stamp;
      if (time_status < time_select && show_status) {
        
        textAlign(LEFT);
        String status = dangerous[rand];
        textSize(20);
        text(status, faces[i].x+325, faces[i].y+150);
        //if (rand != [0]) {
          //println("YES");}
      } else if (time_status >= time_frame) {
        stamp = millis();
        time_status = (int)random(min_time, max_time);
        show_status = !show_status;
        rand = (int)random(dangerous.length);
        //display();
      }
      else {
        textAlign(LEFT);
        text("NEW SCORE!", faces[i].x+325, faces[i].y+150);
      }
    }
  } 
  
  if (faces.length<=0) { 
    textAlign(CENTER); 
    fill(255, 0, 0); 
    textSize(40); 
    text("NO SUSPECT FOUND", 320, 220);
  }

}

void captureEvent(Capture cam) { 
  cam.read();
}