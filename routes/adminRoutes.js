const express = require("express");
const User = require("../models/User");
const Transaction = require("../models/Transaction");

const router = express.Router();

router.get("/admin/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get("/admin/transactions", async (req, res) => {
  const txs = await Transaction.find()
      .populate('userId', 'name') 
      .populate('tellerId', 'name') 
      .sort({ createdAt: -1 });    
  res.json(txs);
});

module.exports = router;
