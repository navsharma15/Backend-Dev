const mongoose = require("mongoose");

const beneficiarySchema = new mongoose.Schema({
  userId: String,
  name: String,
  accountNumber: String
});

module.exports = mongoose.model("Beneficiary", beneficiarySchema);