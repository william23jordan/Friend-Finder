var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//in hot restaurants we saved data in server.js
//in hot restaurants we defined routes in server.js
//now we save data in friends.js
//friends.js will be used in routes js files
//and we need to import those routes files
var apiroutes = require("./app/routing/apiroutes.js");
var htmlroutes = require("./app/routing/htmlroutes.js");

app.use(apiroutes);
app.use(htmlroutes);

//listening
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});