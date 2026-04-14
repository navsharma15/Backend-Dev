const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  is2FAEnabled: { type: Boolean, default: false },

  resetToken: String,
  resetTokenExpiry: Date,

  failedLoginAttempts: { type: Number, default: 0 },
  isLocked: { type: Boolean, default: false }
}, { timestamps: true });

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);