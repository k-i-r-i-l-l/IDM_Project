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

//Setting json
const dataFile = "./myjsonfile.json";
var word = fs.readFileSync("myjsonfile.json");
var data = JSON.parse(word); // this makes readable ths things
console.log(dataFile);
console.log(data);


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
				dataObj = [
					  {
					    "name": firstname,
					  }
					]; // WORKING
				console.log(dataObj);

		    fs.writeFile("./myjsonfile.json", JSON.stringify(dataObj), function(err) {
		        if(err) {
		            return console.log(err);
		        }
							console.log("Json has been updated")
		    });
		});


	  response.redirect("/question2");
});

app.post("/question-2", function (req, res) {
  var firstname = request.session.name;
  response.redirect("/index.ejs");


});

// --- GET SECTION ---
app.get("/question2",  function (req, res) {
	res.render("question-2.ejs", {"sex": req.body.name} );
}
);


app.get("/",  function (req, res) {
  var name = req.body.name;
	res.render("index.ejs", {"name":name} );
}
);



// login post route handles logging in and then redirects users back to home
/* app.post("/", function(request, response) {
    // check the credentials
    var firstname = request.body.name;
    // TO DO: the firstname into an object then write it to json file 
    response.redirect("login.html");
}); */