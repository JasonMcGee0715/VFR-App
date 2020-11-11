const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const usersRoutes = require("./routes/users");
// const usersAddressRoutes = require("./routes/usersAddress");
// const usersContactRoutes = require("./routes/usersContact");
// const usersCredentialsRoutes = require("./routes/usersCredentials");
// const businessesRoutes = require("./routes/businesses");

//
//u
//App.use

// app.use(express.static("public"));
app.use(bodyParser.json());
app.use(usersRoutes);
// app.use(usersAddressRoutes);
// app.use(usersContactRoutes);
// app.use(usersCredentialsRoutes);
// app.use(businessesRoutes);

//
//
//Server Port 4001

const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
