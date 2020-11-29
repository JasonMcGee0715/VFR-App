const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

//
//
// User List, Show, Create functions - These interactive with local databases to list all, show 1, or create data
const list = (req, res) => {
  // SELECT ALL USERS
  pool.query("SELECT * FROM businesses", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const show = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  const id = req.params.id;
  console.log(id);
  let sql = `SELECT ?? FROM ?? WHERE ?? = ?`;
  // WHAT GOES IN THE BRACKETS
  sql = mysql.format(sql, ["*", "businesses", "id", id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

// const showByName = (req, res) => {
//   // SELECT USERS WHERE ID = <REQ PARAMS ID>
//   const name = selectedName;
//   console.log(name);
//   let sql = `SELECT ?? FROM ?? WHERE ?? = ?`;
//   // WHAT GOES IN THE BRACKETS
//   sql = mysql.format(sql, ["*", "businesses", "name", name]);

//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err);
//     return res.json(rows);
//   });
// };

// const showByZip = (req, res) => {
//   // SELECT USERS WHERE ID = <REQ PARAMS ID>
//   const zip = selectedZip;
//   console.log(zip);
//   let sql = `SELECT ?? FROM ?? WHERE ?? = ?`;
//   // WHAT GOES IN THE BRACKETS
//   sql = mysql.format(sql, ["*", "businesses", "zip", zip]);

//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err);
//     return res.json(rows);
//   });
// };

// const showByCity = (req, res) => {
//   // SELECT USERS WHERE ID = <REQ PARAMS ID>
//   const city = selectedCity;
//   console.log(city);
//   let sql = `SELECT ?? FROM ?? WHERE ?? = ?`;
//   // WHAT GOES IN THE BRACKETS
//   sql = mysql.format(sql, ["*", "businesses", "city", city]);

//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err);
//     return res.json(rows);
//   });
// };

// const showByZip = (req, res) => {
//   // SELECT USERS WHERE ID = <REQ PARAMS ID>
//   const zip = selectedZip;
//   console.log(zip);
//   let sql = `SELECT ?? FROM ?? WHERE ?? = ?`;
//   // WHAT GOES IN THE BRACKETS
//   sql = mysql.format(sql, ["*", "businesses", "zip", zip]);

//   pool.query(sql, (err, rows) => {
//     if (err) return handleSQLError(res, err);
//     return res.json(rows);
//   });
// };

const create = (req, res) => {
  let newBusiness = req.body;
  let name = newBusiness.name;
  let address = newBusiness.address;
  let city = newBusiness.city;
  let state = newBusiness.state;
  let zip = newBusiness.zip;
  let chain = newBusiness.chain;
  let militaryDiscount = newBusiness.militaryDiscount;

  // INSERT INTO USERS FIRST AND LAST NAME
  let sql =
    "INSERT INTO ?? (??, ??, ??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?, ?, ?)";
  // WHAT GOES IN THE BRACKETS???
  sql = mysql.format(sql, [
    "businesses",
    "name",
    "address",
    "city",
    "state",
    "zip",
    "chain",
    "militaryDiscount",
    `${name}`,
    `${address}`,
    `${city}`,
    `${state}`,
    `${zip}`,
    `${chain}`,
    `${militaryDiscount}`,
  ]);

  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json({
      newId: results.insertId,
    });
  });
};

module.exports = { list, show, create };

// const list = (req, res) => {
//   return res.json(businesses);
// };

// const show = (req, res) => {
//   const id = req.params.businessId;

//   const foundBusiness = businesses.find(
//     (business) => business.businessId === Number(id)
//   );
//   console.log(foundBusiness);
//   res.json(foundBusiness);
// };

// const create = (req, res) => {
//   const business = {
//     businessId: businessesCount + 1,
//     ...req.body,
//   };
//   if (
//     !business.businessId ||
//     !business.name ||
//     !business.city ||
//     !business.state ||
//     !business.chain ||
//     !business.nationalCompany ||
//     !business.militaryDiscount
//   ) {
//     return res.status(400).json({
//       msg: `Please enter an businessId, name, city, state, chain, nationalCompany, militaryDiscount`,
//     });
//   }
//   businesses.push(business);
//   res.json(businesses);
// };

// module.exports = { list, show, create };
