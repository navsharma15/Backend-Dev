const express = require("express");
const router = express.Router();
const auth = require("../auth/auth.middleware");

const txn = require("../controller/transaction.controller");
const { transferLimiter } = require("../middle/rateLimit.middleware");

router.post("/transfer", auth, transferLimiter, txn.transfer);

module.exports = router;