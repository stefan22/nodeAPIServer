//load express and body-parser
const express = require("express");
const bodyParser = require("body-parser");


//express instance
const app = express();

//load filesystem 
const fs = require("fs");

//handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//handle routes
const routes = require("./routes/routes.js")(app, fs);



//server port 5000
const server = app.listen(5000, () => {
  console.log("\n Listening on port %s...", server.address().port);
});
