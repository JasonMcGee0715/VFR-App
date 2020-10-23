const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const usersRoutes = require("./routes/users");

//
//
//App.use

// app.use(express.static("public"));
app.use(bodyParser.json());
app.use(usersRoutes);

//
//
//Server Port 4001

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
