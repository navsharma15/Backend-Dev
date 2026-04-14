const express = require("express");
const router = express.Router();
const auth = require("../auth/auth.middleware");

const user = require("../controller/user.controller");

router.get("/profile", auth, user.getProfile);

module.exports = router;