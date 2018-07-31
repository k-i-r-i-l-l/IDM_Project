//FINAL APP

//required modules
var express = require("express");
var bodyParser = require("body-parser");
var session	=	require('express-session');
var fs = require("fs");


//set up our express app object
var app = express();

//global variables
var port = 8807;

//configure our middleware
app.use(express.static("myStatic")); // contains html, css and images
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
				secret:	'crmorytp8vyp98p%&ADIB66^^&fjdfdfaklfdhf',
				resave:	false,
				saveUninitialized:	true,
				cookie:	{	maxAge:	60000*11000	}
}));

app.set("view engine", "ejs");
app.set("views", "myTemplates");


//make the app listen for request
app.listen(port); //listen on that port
console.log("Server running on http://localhost:"+port);


//------- WRITTING JSON -----------------//

//Setting json Q1
const dataFile = "./myjsonfile.json";
var nameFile = fs.readFileSync("myjsonfile.json");
var name = JSON.parse(nameFile); // this makes readable ths things
console.log(dataFile);
console.log(name);

//Function to reading AGAIN the JSON file. Needs to be called
function setUpName() {
var nameFile = fs.readFileSync("myjsonfile.json");
var dataName = JSON.parse(nameFile); // this makes readable ths things
//console.log(name);
return dataName;
};

// First question
app.post("/question1", function(request, response) {
     //check the credentials
    var firstname = request.body.name;
    console.log(firstname); //WORKING
    // TO DO: the firstname into an object then write it to json file
		fs.readFile( dataFile, function read(err, data) {
		    if (err) {
		        throw err;
						console.log("error readfile");
		    }
		    dataObj = JSON.parse(data); // transform the JSON file into a readable thing to humans
				console.log(dataObj);
				dataObj =
					  {
					    "name": firstname,
					  }
					; // WORKING
				//dataObj.name.push({id: 2, square:3});
		    //console.log(dataObj);
				console.log(dataObj);

		    fs.writeFile("./myjsonfile.json", JSON.stringify(dataObj), function(err) {
		        if(err) {
		            return console.log(err);
		        }
							console.log("Json has been updated")
		    });
		});
	  response.render("ads1.ejs", {"name":firstname});
});

//Setting JSON Q2

//Setting variables
var dataFile2 = "./myjsonfileq2.json";
var genderFile = fs.readFileSync("myjsonfileq2.json");
var genderDefined = JSON.parse(genderFile); // this makes readable ths things

//console.log(genderDefined);

//Function to reading AGAIN the JSON file. Needs to be called
function setUpGender() {
var genderFile = fs.readFileSync("myjsonfileq2.json");
var genderDefined = JSON.parse(genderFile); // this makes readable ths things
console.log(genderDefined);
return genderDefined;
};

// Second question
app.post("/question2", function(request, response) {
     //check the credentials

    var gender = request.body.gender;
    console.log(gender); //WORKING
    // TO DO: the firstname into an object then write it to json file
		fs.readFile( dataFile2, function read(err, data) {
		    if (err) {
		        throw err;
						console.log("error readfile");
		    }
		    dataObj = JSON.parse(data); // transform the JSON file into a readable thing to humans
				console.log(dataObj);
				dataObj =
					  {
					    "gender": gender,
					  }
					; // WORKING
				//dataObj.name.push({id: 2, square:3});
		    //console.log(dataObj);
				console.log(dataObj);

		    fs.writeFile("./myjsonfileq2.json", JSON.stringify(dataObj), function(err) {
		        if(err) {
		            return console.log(err);
		        }
							console.log(JSON.stringify(name));
							console.log("Json Question 2 has been updated")
		    });
		});
	  response.redirect("/ads2");
});


//Setting JSON Q3
const dataFile3 = "./myjsonfileq3.json";
var ageFile = fs.readFileSync("myjsonfileq3.json");
var ageSet = JSON.parse(ageFile); // this makes readable ths things
console.log(dataFile3);
console.log(ageSet);

//Function to reading AGAIN the JSON file. Needs to be called
function setUpAge() {
var ageFile = fs.readFileSync("myjsonfileq3.json");
var ageSet = JSON.parse(ageFile); // this makes readable ths things
console.log(ageSet);
return ageSet;
};


//Third question
app.post("/question3", function(request, response) {
     //check the credentials
    var generation = request.body.gen;
    console.log(generation);

		fs.readFile( dataFile3, function read(err, data) {
		    if (err) {
		        throw err;
						console.log("error readfile");
		    }
		    dataObj = JSON.parse(data); // transform the JSON file into a readable thing to humans
				console.log(dataObj);
				dataObj =
					  {
					    "generation": generation,
					  }
					; // WORKING
				//dataObj.name.push({id: 2, square:3});
		    //console.log(dataObj);
				console.log(dataObj);

		    fs.writeFile("./myjsonfileq3.json", JSON.stringify(dataObj), function(err) {
		        if(err) {
		            return console.log(err);
		        }
							console.log("Json Question 3 has been updated")
		    });
		});

	  response.redirect("/ads3");
});

//Setting JSON Q4
const dataFile4 = "./myjsonfileq4.json";
var hobbieFile = fs.readFileSync("myjsonfileq4.json");
var hobbieSet = JSON.parse(hobbieFile); // this makes readable ths things
//console.log(dataFile4);
console.log(hobbieSet);

// Fourth question
app.post("/question4", function(request, response) {
     //check the credentials
    var hobbie = request.body.hobbie;
    //console.log(hobbie);

		fs.readFile( dataFile4, function read(err, data) {
		    if (err) {
		        throw err;
						console.log("error readfile");
		    }
		    dataObj = JSON.parse(data); // transform the JSON file into a readable thing to humans
				//console.log(dataObj);
				dataObj =
					  {
					    "hobbies": [hobbie]
					  }
					; // WORKING
				//dataObj.name.push({id: 2, square:3});
		    //console.log(dataObj);
				console.log(dataObj);

		    fs.writeFile("./myjsonfileq4.json", JSON.stringify(dataObj), function(err) {
		        if(err) {
		            return console.log(err);
		        }
							console.log("Json Question 4 has been updated")
		    });
		});

	  response.render("ads4.ejs", {"hobbie":hobbie});
});

//Setting JSON Q5
const dataFile5 = "./myjsonfileq5.json";
var ethnicityFile = fs.readFileSync("myjsonfileq5.json");
var ethnicitySet = JSON.parse(ethnicityFile); // this makes readable ths things
//console.log(dataFile4);
console.log(ethnicitySet);

function setUpEthnicity() {
var ethnicityFile = fs.readFileSync("myjsonfileq5.json");
var ethnicitySet = JSON.parse(ethnicityFile); // this makes readable ths things
return ethnicitySet;
};

// Fith question
app.post("/question5", function(request, response) {
     //check the credentials
    var ethnicity = request.body.ethnicity;
    //console.log(hobbie);

		fs.readFile( dataFile5, function read(err, data) {
		    if (err) {
		        throw err;
						console.log("error readfile");
		    }
		    dataObj = JSON.parse(data); // transform the JSON file into a readable thing to humans
				//console.log(dataObj);
				dataObj =
					  {
					    "ethnicity": ethnicity,
					  }
					; // WORKING
				//dataObj.name.push({id: 2, square:3});
		    //console.log(dataObj);
				console.log(dataObj);

		    fs.writeFile("./myjsonfileq5.json", JSON.stringify(dataObj), function(err) {
		        if(err) {
		            return console.log(err);
		        }
							console.log("Json Question 5 has been updated")
		    });
		});

	  response.redirect("/ads5");
});




// FINAL AND DELETING DATA
app.post("/delete", function(request, response) {
    //JSON name
		fs.readFile( dataFile, function read(err, data) {
		    if (err) {
		        throw err;
						console.log("error readfile");
		    }
		    dataObj = JSON.parse(data); // transform the JSON file into a readable thing to humans
				console.log(dataObj);
				dataObj =
					  {

					  }
					; // WORKING
				//dataObj.name.push({id: 2, square:3});
		    //console.log(dataObj);
				console.log(dataObj);

		    fs.writeFile("./myjsonfile.json", JSON.stringify(dataObj), function(err) {
		        if(err) {
		            return console.log(err);
		        }
							console.log("Json question 1 has no information now")
		    });
		});
		//JSON gender
		fs.readFile( dataFile2, function read(err, data) {
				if (err) {
						throw err;
						console.log("error readfile");
				}
				dataObj = JSON.parse(data); // transform the JSON file into a readable thing to humans
				console.log(dataObj);
				dataObj =
						{
						 "gender":""
						}
					; // WORKING
				//dataObj.name.push({id: 2, square:3});
				//console.log(dataObj);
				console.log(dataObj);

				fs.writeFile("./myjsonfileq2.json", JSON.stringify(dataObj), function(err) {
						if(err) {
								return console.log(err);
						}
							console.log("Json question 2 has no information now")
				});
		});

		//JSON age
		fs.readFile( dataFile3, function read(err, data) {
				if (err) {
						throw err;
						console.log("error readfile");
				}
				dataObj = JSON.parse(data); // transform the JSON file into a readable thing to humans
				console.log(dataObj);
				dataObj =
						{
						 "age":""
						}
					; // WORKING
				//dataObj.name.push({id: 2, square:3});
				//console.log(dataObj);
				console.log(dataObj);

				fs.writeFile("./myjsonfileq3.json", JSON.stringify(dataObj), function(err) {
						if(err) {
								return console.log(err);
						}
							console.log("Json question 3 has no information now")
				});
		});

		//JSON hobbies
		fs.readFile( dataFile4, function read(err, data) {
				if (err) {
						throw err;
						console.log("error readfile");
				}
				dataObj = JSON.parse(data); // transform the JSON file into a readable thing to humans
				console.log(dataObj);
				dataObj =
						{
						 "hobbies":[""]
					 }
					; // WORKING
				//dataObj.name.push({id: 2, square:3});
				//console.log(dataObj);
				console.log(dataObj);

				fs.writeFile("./myjsonfileq4.json", JSON.stringify(dataObj), function(err) {
						if(err) {
								return console.log(err);
						}
							console.log("Json questions 4 has no information now")
				});
		});

		//JSON ethnicity
		fs.readFile( dataFile5, function read(err, data) {
				if (err) {
						throw err;
						console.log("error readfile");
				}
				dataObj = JSON.parse(data); // transform the JSON file into a readable thing to humans
				console.log(dataObj);
				dataObj =
						{
						 "ethnicity":""
						}
					; // WORKING
				//dataObj.name.push({id: 2, square:3});
				//console.log(dataObj);
				console.log(dataObj);

				fs.writeFile("./myjsonfileq5.json", JSON.stringify(dataObj), function(err) {
						if(err) {
								return console.log(err);
						}
							console.log("Json questions 5 has no information now")
				});
		});


	  response.redirect("index.html");
});



// -------- GET SECTION ----------------//


// Question 2
app.get("/ads2",  function (req, res) {
	genderDefined = setUpGender();
	data = setUpName();
	res.render("ads2.ejs", {"gender": genderDefined["gender"], "dataName": data["name"]});
}
);

// Question 3
app.get("/ads3",  function (req, res) {
	genderDefined = setUpGender();
	data = setUpName();
	ageSet = setUpAge();
	res.render("ads3.ejs", {"gender": genderDefined["gender"], "dataName": data["name"], "dataAge": ageSet["generation"]});
}
);

// Question 5
app.get("/ads5",  function (req, res) {
	genderDefined = setUpGender();
	data = setUpName();
	ethnicitySet = setUpEthnicity();
	ageSet = setUpAge();
	res.render("ads5.ejs", {"gender": genderDefined["gender"], "dataName": data["name"],  "dataAge": ageSet["generation"] ,"dataEthnicity": ethnicitySet["ethnicity"]});
}
);
