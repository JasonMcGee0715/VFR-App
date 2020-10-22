const users = require("../data/users");
const usersCount = users.length;

//
//
// User List, Show, Create functions - These interactive with local databases to list all, show 1, or create data

const list = (req, res) => {
  return res.json(users);
};

const show = (req, res) => {
  const id = req.params.id;
  const foundUser = contacts.find((user) => user.id === Number(id));

  res.json(foundUser);
};

const create = (req, res) => {
  console.log(req.body);

  const newUser = {
    id: usersCount + 1,
    ...req.body,
  };

  contacts.push(newUser);
  res.json(newUser);
};

module.exports = [list, show, create];
