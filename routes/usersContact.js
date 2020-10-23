const express = require("express");
const router = express.Router();

//
//
// File Import

const usersContactController = require("../controllers/usersContact");

//
//
// Router Paths

router.get("/usersContact", usersContactController.list);
router.get("/usersContact/:id", usersContactController.show);
router.post("/usersContact", usersContactController.create);

//
//
// Export to index.js

module.exports = router;
