const express = require("express");
const router = express.Router();

const auth = require("../controller/auth.controller");
const { loginLimiter } = require("../middle/rateLimit.middleware");

router.post("/register", auth.register);
router.post("/login", loginLimiter, auth.login);
router.post("/forgot", auth.forgotPassword);

module.exports = router;