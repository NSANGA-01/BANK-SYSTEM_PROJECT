const express = require("express");
const User = require("../models/User");
const Transaction = require('../models/Transaction');
const BankAccount = require("../models/Bankaccount");
const bcrypt = require("bcryptjs");


const router = express.Router();

router.post("/verify-bk", async (req, res) => {
  const { account, password } = req.body;

  const bankAcc = await BankAccount.findOne({
    accountNumber: account.trim()
    
  });

  if (!bankAcc) {
    return res.json({ ok: false });
  }

  const match = await bcrypt.compare(password, bankAcc.password);
  if (!match) {
    return res.json({ ok: false });
  }

  res.json({
    ok: true,
    role: bankAcc.role
  });
});

router.post("/transaction", async (req, res) => {
  const { userId, tellerId, type, amount } = req.body;

  await Transaction.create({
    userId,
    tellerId,
    type,
    amount,
    status: "pending"
  });

  res.json({ msg: "Transaction sent. Waiting for teller approval." });
});

router.get("/my-transactions/:id", async (req, res) => {
  const txs = await Transaction.find({ userId: req.params.id })
  .populate('userId')
  .sort({ date: -1 }); 
  res.json(txs);
});

router.get("/transaction/:id", async (req, res) => {
  try {
    const tx = await Transaction.findById(req.params.id)
      .populate("userId", "name")
      .populate("tellerId", "name"); // niba tellerId iri muri DB
    if (!tx) return res.status(404).json({ msg: "Transaction not found" });
    res.json(tx);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});


module.exports = router;
