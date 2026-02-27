const mongoose = require ('mongoose');


const tellerSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    role:{type : String , default :'teller'},
    date : {type : Date , default : Date.now}
})
module.exports = mongoose.model('Teller',tellerSchema);