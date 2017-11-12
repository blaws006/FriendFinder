//Requiremnets///////////////////////////////////////////////
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//Global Varibles///////////////////////////////////////////////

//Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

//Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({
  type: 'application/*+json'
}))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({
  type: 'application/vnd.custom-type'
}))

// parse an HTML body into a string
app.use(bodyParser.text({
  type: 'text/html'
}))

//Allows me to use DOM dependent languages, like jQuery, on server side. 
app.use(express.static("app/public"));
//Routers//////////////////////////////////////////////////
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Functions///////////////////////////////////////////////
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});