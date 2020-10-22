const express = require("express");
const bodyParser = require("body-parser");
// const comments = require("./data/comments");

const app = express();

//
//
//App.use

app.use(express.static("public"));
app.use(bodyParser.json());
// app.use(contactsRoutes);

//
//
//Server Port 4001

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
