
const express = require('express');
const User = require('../models/User');
const Teller = require ('../models/Teller')
const bcrypt = require('bcryptjs')
const router = express.Router();


router.post('/register',async(req,res)=>{
    const hash= await bcrypt.hash(req.body.password,10);

   await User.create({
        name : req.body.name,
        email : req.body.email,
        password : hash,
        bkaccount : req.body.bkaccount

    });

    res.json({msg:"user registered successfull"});
});

router.post('/login',async(req,res)=>{
    const {email,password} = req.body;

    const account = (await User.findOne({email})) || (await Teller.findOne({email}));
    if (!account) return res.json({msg:'invalid email or password'});

    const ok = await bcrypt.compare(password,account.password);
    if(!ok) return res.json({msg:'invalid password'})

        res.json({role:account.role , id:account.id});

})

module.exports = router;