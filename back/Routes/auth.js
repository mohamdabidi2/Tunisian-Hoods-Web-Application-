const router = require('express').Router();
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const {validRegister, validLogin} = require('../validation');
const auth = require('../VTOKEN');


router.post('/register', async (req, res) => {
    // Valid Form
    const {error} = validRegister(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    // Check already email
    const emailExist = await User.findOne({Email: req.body.Email});
    if (emailExist) return res.send({msg: 'email already exist'});

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(req.body.Password, salt);
    let randomByte = Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15) + Math.random().toString(36).substr(2, 15)

    const newUser = new User({
        FullName: req.body.FullName,
        Email: req.body.Email,
        DiscordID: req.body.DiscordID,
        Emailtoken:randomByte,
        Password: passwordHashed
    });
    try {
        const addNewUser = await newUser.save();
        res.send({msg:"success"});
    } catch(err) {
        res.status(400).json({message: err});
    }
});

router.post('/login', async (req, res) => {
    // Basic Valid
    const {error} = validLogin(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // Find email
    const user = await User.findOne({Email: req.body.Email});
    if (!user) return res.status(400).send('Email not found');
    // Check Password
    const validPass = await bcrypt.compare(req.body.Password, user.Password)
    if (!validPass) return res.status(400).send('Email or Password is wrong');
    //Create and assign token
    const token = jwt.sign({_id: user._id,verifiedEmail:user.verifiedEmail,IsAdmin:user.IsAdmin,Email:user.Email}, process.env.SCERET_KEY);
    res.header('authToken', token).send({token:token,logedin:true});
});
router.post("/logintodashboard",auth,(req,res)=>{
    res.send(req.user)
})






// verif Email by token
router.get('/verify=:token', async (req, res) => {
    let token = req.params.token
    User.findOne({ Emailtoken: token }, (err, doc) => {
      if (err) {
        res.send("err")
      }
      else {
        doc.verifiedEmail = true
        doc.save()
      }
  
      res.redirect('/log')
    })
  
  
  
  })
  

module.exports = router;