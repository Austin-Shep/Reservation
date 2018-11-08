//server stuff
var express = require("express");
var routes = require("./app/routes/html-route.js")(app);

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT);
console.log('Server started! At http://localhost:' + PORT);