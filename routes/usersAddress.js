const express = require("express");
const router = express.Router();

//
//
// File Import

const usersAddressController = require("../controllers/usersAddress");

//
//
// Router Paths

router.get("/usersAddress", usersAddressController.list);
router.get("/usersAddress/:id", usersAddressController.show);
router.post("/usersAddress", usersAddressController.create);

//
//
// Export to index.js

module.exports = router;
