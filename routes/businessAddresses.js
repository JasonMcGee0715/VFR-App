const express = require("express");
const router = express.Router();

//
//
// File Import

const businessAddressesController = require("../controllers/businessAddresses");

//
//
// Router Paths

router.get("/businessAddresses", businessAddressesController.list);
router.get("/businessAddresses/:businessId", businessAddressesController.show);
router.post("/businessAddresses", businessAddressesController.create);

//
//
// Export to index.js

module.exports = router;
