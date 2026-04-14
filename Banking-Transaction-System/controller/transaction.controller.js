const Account = require("../model/account.model");
const Transaction = require("../model/transaction.model");

exports.transfer = async (req, res) => {
  const { fromAccount, toAccount, amount } = req.body;

  if (amount <= 0) return res.status(400).json({ msg: "Invalid amount" });

  const sender = await Account.findOne({ accountNumber: fromAccount });
  const receiver = await Account.findOne({ accountNumber: toAccount });

  if (!sender || !receiver)
    return res.status(404).json({ msg: "Account not found" });

  if (sender.balance < amount)
    return res.status(400).json({ msg: "Insufficient balance" });

  sender.balance -= amount;
  receiver.balance += amount;

  await sender.save();
  await receiver.save();

  const txn = await Transaction.create({
    fromAccount,
    toAccount,
    amount,
    status: "success"
  });

  res.json(txn);
};