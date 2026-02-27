const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:{type:String,default:'user'},
    bkaccount:String,
    balance:{type:Number , default : '1000'},
    date:{type:Date,default:Date.now}
})
module.exports = mongoose.model('User',userSchema);