const usersCredentials = require("../data/usersCredentials");
const usersCredentialsCount = usersCredentials.length;

//
//
// User List, Show, Create functions - These interactive with local databases to list all, show 1, or create data

const list = (req, res) => {
  return res.json(usersCredentials);
};

const show = (req, res) => {
  const id = req.params.id;

  const foundCredentials = usersCredentials.find(
    (Credentials) => Credentials.id === Number(id)
  );
  console.log(foundCredentials);
  res.json(foundCredentials);
};

const create = (req, res) => {
  const newCredential = {
    id: usersCredentialsCount + 1,
    userId: usersCredentialsCount + 1,
    ...req.body,
  };
  if (
    !newCredential.id ||
    !newCredential.userId ||
    !newCredential.phone ||
    !newCredential.email
  ) {
    return res.status(400).json({
      msg: `Please enter an id, city, state, county, zip`,
    });
  }
  usersCredentials.push(newCredentials);
  res.json(usersCredentials);
};

module.exports = { list, show, create };
