const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  fromAccount: String,
  toAccount: String,
  amount: Number,
  description: String,
  status: { type: String, default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Transaction", transactionSchema);