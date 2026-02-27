const express = require("express");
const Transaction = require("../models/Transaction");
const User = require("../models/User");

const router = express.Router();

router.get("/teller-transactions/:id", async (req, res) => {
  const transactions = await Transaction.find({
    tellerId: req.params.id,
    status: "pending"
  }).populate('userId', 'name');

  res.json(transactions);
});

router.post("/approve", async (req, res) => {
  const tx = await Transaction.findById(req.body.id);
  const user = await User.findById(tx.userId);


  const amount = Number(tx.amount);
  const currentBalance = Number(user.balance);

  if (tx.type === "deposit") {
    user.balance = currentBalance + amount ;
  } else {
    user.balance = currentBalance - amount ;
  }

  tx.status = "approved";

  await user.save();
  await tx.save();

  res.json({ msg: "Approved" });
});

router.get("/teller/:id/transaction", async (req, res) => {
  const transaction = await Transaction.find({ tellerId: req.params.id})
  .populate('userId','name')
  res.json(transaction);

});









module.exports = router;
