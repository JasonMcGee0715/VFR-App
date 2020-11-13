const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");
//
//
// User List, Show, Create functions - These interactive with local databases to list all, show 1, or create data

const list = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM businessAddresses", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const show = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  const id = req.params.businessId;
  console.log(id);
  let sql = `SELECT ?? FROM ?? WHERE ?? = ?`;
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, ["*", "businessAddresses", "businessId", id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const create = (req, res) => {
  let newAddress = req.body;
  let businessId = newAddress.businessId;
  let name = newAddress.name;
  let address = newAddress.address;
  let city = newAddress.city;
  let state = newAddress.state;

  // INSERT INTO USERS FIRST AND LAST NAME
  let sql = "INSERT INTO ?? (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)";
  // WHAT GOES IN THE BRACKETS???
  sql = mysql.format(sql, [
    "businessAddresses",
    "businessId",
    "name",
    "address",
    "city",
    "state",
    `${businessId}`,
    `${name}`,
    `${address}`,
    `${city}`,
    `${state}`,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

module.exports = { list, show, create };

// const list = (req, res) => {
//   return res.json(usersAddress);
// };

// const show = (req, res) => {
//   const id = req.params.id;

//   const foundAddress = usersAddress.find(
//     (address) => address.id === Number(id)
//   );
//   console.log(foundAddress);
//   res.json(foundAddress);
// };

// const create = (req, res) => {
//   const newAddress = {
//     id: usersAddressCount + 1,
//     userId: usersAddressCount + 1,
//     ...req.body,
//   };
//   if (
//     !newAddress.id ||
//     !newAddress.userId ||
//     !newAddress.city ||
//     !newAddress.state ||
//     !newAddress.county ||
//     !newAddress.zip
//   ) {
//     return res.status(400).json({
//       msg: `Please enter an id, city, state, county, zip`,
//     });
//   }
//   usersAddress.push(newAddress);
//   res.json(usersAddress);
// };

// module.exports = { list, show, create };
