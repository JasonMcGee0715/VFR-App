const usersAddress = require("../data/usersAddress");
const usersAddressCount = usersAddress.length;

//
//
// User List, Show, Create functions - These interactive with local databases to list all, show 1, or create data

const list = (req, res) => {
  return res.json(usersAddress);
};

const show = (req, res) => {
  const id = req.params.id;

  const foundAddress = usersAddress.find(
    (address) => address.id === Number(id)
  );
  console.log(foundAddress);
  res.json(foundAddress);
};

const create = (req, res) => {
  const newAddress = {
    id: usersAddressCount + 1,
    userId: usersAddressCount + 1,
    ...req.body,
  };
  if (
    !newAddress.id ||
    !newAddress.userId ||
    !newAddress.city ||
    !newAddress.state ||
    !newAddress.county ||
    !newAddress.zip
  ) {
    return res.status(400).json({
      msg: `Please enter an id, city, state, county, zip`,
    });
  }
  usersAddress.push(newAddress);
  res.json(usersAddress);
};

module.exports = { list, show, create };
