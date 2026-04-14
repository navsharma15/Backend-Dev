const express = require("express");
const router = express.Router();
const auth = require("../auth/auth.middleware");

const acc = require("../controller/account.controller");

router.post("/create", auth, acc.createAccount);
router.get("/balance", auth, acc.getBalance);

module.exports = router;