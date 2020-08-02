const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();

const PORT = 8080 || process.env.PORT;


//may not need
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//the above code

const server = http.createServer(handleRequest);



function handleRequest(req, res) {
  console.log("success!")
}

require("./routes/indexRoute")(app);
require("./routes/notesRoute")(app);


server.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });