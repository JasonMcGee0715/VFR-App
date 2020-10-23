const express = require("express");
const router = express.Router();

//
//
// File Import

const businessesController = require("../controllers/businesses");

//
//
// Router Paths

router.get("/businesses", businessesController.list);
router.get("/businesses/:businessId", businessesController.show);
router.post("/businesses", businessesController.create);

//
//
// Export to index.js

module.exports = router;
