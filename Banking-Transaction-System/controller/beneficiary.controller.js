const Beneficiary = require("../model/beneficiary.model");

exports.addBeneficiary = async (req, res) => {
  const ben = await Beneficiary.create({
    userId: req.user._id,
    ...req.body
  });

  res.json(ben);
};