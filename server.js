// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var routes = require("./app/routes/html-route.js")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var rsv = [];


// Displays a single character, or returns false
app.get("/api/rsv/:person", function(req, res) {
    var chosen = req.params.person;
  
    console.log(chosen);
  
    for (var i = 0; i < rsv.length; i++) {
      if (chosen === rsv[i].name) {
        return res.json(rsv[i]);
      }
    }
  
    return res.json(false);
  });
  

app.post("/rsv" , function(req,res){

    var newRsv = req.body;

    newRsv.name.replace(/\s+/g, "").toLowerCase();

    console.log(newRsv);

    rsv.push(newRsv);

    res.json(newRsv);
})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });