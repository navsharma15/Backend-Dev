const mongoose = require("mongoose");

const auditSchema = new mongoose.Schema({
  userId: String,
  action: String,
  ip: String
}, { timestamps: true });

module.exports = mongoose.model("Audit", auditSchema);