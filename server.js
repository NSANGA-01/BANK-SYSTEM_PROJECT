const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const BankAccount = require('./models/Bankaccount');
const bcrypt = require('bcryptjs');


app.use(cors());
app.use(express.json());
app.use(express.static('public'))



mongoose.connect("mongodb://127.0.0.1:27017/bankSystem")
.then(()=>console.log('mongodb connected'));




app.use(require('./routes/userRoutes'));
app.use(require('./routes/tellerRoutes'))
app.use(require('./routes/regRoutes'));
app.use(require('./routes/adminRoutes'));



app.listen('1000',(error)=>{
    if (error) throw error
    console.log('server is learning on port 1000')
});