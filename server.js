const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const https = require('https');

//express instance
const app = express();


const certOptions = {
  key: fs.readFileSync(path.resolve('local-cert/server.key')),
  cert: fs.readFileSync(path.resolve('local-cert/server.crt'))
}

//handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//handle routes
const routes = require("./routes/routes.js")(app, fs);



//server port 5000
// const server = app.listen(5000, () => {
//   console.log("\n Listening on port %s...", server.address().port);
// });



const server = https.createServer(certOptions,app)

server.listen(5000);