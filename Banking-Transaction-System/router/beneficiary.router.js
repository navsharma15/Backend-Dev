const express = require("express");
const router = express.Router();
const auth = require("../auth/auth.middleware");

const ben = require("../controller/beneficiary.controller");

router.post("/add", auth, ben.addBeneficiary);

module.exports = router;