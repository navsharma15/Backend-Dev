const Account = require("../model/account.model");

exports.createAccount = async (req, res) => {
  const account = await Account.create({
    userId: req.user._id,
    accountNumber: Date.now().toString(),
    balance: 0
  });

  res.json(account);
};

exports.getBalance = async (req, res) => {
  const acc = await Account.findOne({ userId: req.user._id });
  res.json({ balance: acc.balance });
};