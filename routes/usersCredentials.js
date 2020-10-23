const express = require("express");
const router = express.Router();

//
//
// File Import

const usersCredentialsController = require("../controllers/usersCredentials");

//
//
// Router Paths

router.get("/usersCredentials", usersCredentialsController.list);
router.get("/usersCredentials/:id", usersCredentialsController.show);
router.post("/usersCredentials", usersCredentialsController.create);

//
//
// Export to index.js

module.exports = router;
