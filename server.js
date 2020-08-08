const fs = require("fs");
const express = require("express");
const app = express();

var PORT = process.env.PORT || 8080;


//may not need
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//the above code



require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);


app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
  });