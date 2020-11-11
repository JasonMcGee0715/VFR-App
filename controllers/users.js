const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");
//
//
//
//// Code
const getAllUsers = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM users", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getUserById = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  const id = req.params.id;
  console.log(id);
  let sql = `SELECT ?? FROM ?? WHERE ?? = ?`;
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, ["*", "users", "id", id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const createUser = (req, res) => {
  let newUser = req.body;
  let first = newUser.firstName;
  let last = newUser.lastName;
  let city = newUser.city;
  let state = newUser.state;
  let county = newUser.county;
  let zip = newUser.zip;
  let phone = newUser.phone;
  let email = newUser.email;
  let userName = newUser.userName;
  let password = newUser.password;

  // INSERT INTO USERS FIRST AND LAST NAME
  let sql =
    "INSERT INTO ?? (??, ??, ??, ??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  // WHAT GOES IN THE BRACKETS???
  sql = mysql.format(sql, [
    "users",
    "firstName",
    "lastName",
    "city",
    "state",
    "county",
    "zip",
    "phone",
    "email",
    "userName",
    "password",
    `${first}`,
    `${last}`,
    `${city}`,
    `${state}`,
    `${county}`,
    `${zip}`,
    `${phone}`,
    `${email}`,
    `${userName}`,
    `${password}`,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({ newId: results.insertId });
  });
};

module.exports = { getAllUsers, getUserById, createUser };

// const users = require("../data/users");
// const usersCount = users.length;

// //
// //
// // User List, Show, Create functions - These interactive with local databases to list all, show 1, or create data

// const list = (req, res) => {
//   return res.json(users);
// };

// const show = (req, res) => {
//   const id = req.params.id;
//   const foundUser = users.find((user) => user.id === Number(id));

//   res.json(foundUser);
// };

// const create = (req, res) => {
//   console.log(req.body);

//   const newUser = {
//     id: usersCount + 1,
//     ...req.body,
//   };

//   users.push(newUser);
//   res.json(newUser);
// };

// module.exports = { list, show, create };
