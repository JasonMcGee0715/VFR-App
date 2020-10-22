const express = require("express");
const router = express.Router();

//
//
// File Import

const usersController = require("../controllers/contacts");

//
//
// Router Paths

router.get("/users", usersController.list);
router.get("/contacts/:contactId", contactsController.show);
router.post("/contacts", contactsController.create);

module.exports = router;
