const User = require("../model/user.model");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const { generateToken } = require("../utils/token.util");

exports.register = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ msg: "User not found" });

  if (user.isLocked) return res.status(403).json({ msg: "Account locked" });

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    user.failedLoginAttempts++;
    if (user.failedLoginAttempts > 5) user.isLocked = true;
    await user.save();
    return res.status(401).json({ msg: "Invalid credentials" });
  }

  user.failedLoginAttempts = 0;
  await user.save();

  const token = generateToken(user);

  res.json({ token });
};

exports.forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  const token = crypto.randomBytes(32).toString("hex");

  user.resetToken = token;
  user.resetTokenExpiry = Date.now() + 10 * 60 * 1000;

  await user.save();

  res.json({ msg: "Reset link sent", token });
};