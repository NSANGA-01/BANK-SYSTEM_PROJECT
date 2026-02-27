const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  userId:{type : mongoose.Schema.Types.ObjectId, ref:'User'},
  tellerId: {type : mongoose.Schema.Types.ObjectId, ref:'User'},
  type: String,
  amount: Number,
  status: { type: String, default: "pending" },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Transaction", transactionSchema);
