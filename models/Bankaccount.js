const mongoose = require("mongoose");

const bankAccountSchema = new mongoose.Schema({
  accountNumber: String,
  password: String,        
  ownerName: String,
  role: {
    type: String,
    enum: ["user", "teller", "admin"]
  },
  ownerId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("BankAccount", bankAccountSchema);
