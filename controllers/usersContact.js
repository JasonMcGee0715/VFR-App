const usersContact = require("../data/usersContact");
const usersContactCount = usersContact.length;

//
//
// User List, Show, Create functions - These interactive with local databases to list all, show 1, or create data

const list = (req, res) => {
  return res.json(usersContact);
};

const show = (req, res) => {
  const id = req.params.id;

  const foundContact = usersContact.find(
    (contact) => contact.id === Number(id)
  );
  console.log(foundContact);
  res.json(foundContact);
};

const create = (req, res) => {
  const newContact = {
    id: usersContactCount + 1,
    userId: usersContactCount + 1,
    ...req.body,
  };
  if (
    !newContact.id ||
    !newContact.userId ||
    !newContact.phone ||
    !newContact.email
  ) {
    return res.status(400).json({
      msg: `Please enter an id, city, state, county, zip`,
    });
  }
  usersContact.push(newContact);
  res.json(usersContact);
};

module.exports = { list, show, create };
