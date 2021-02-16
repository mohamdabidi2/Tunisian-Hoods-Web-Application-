const router = require('express').Router();
const User = require('../models/userModel');
const nodemailer = require("nodemailer");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const {validRegister, validLogin} = require('../validation');
const auth = require('../VTOKEN');
const Admin = require('../models/AdminsModel');
const StaffApplication = require('../models/staffApp');
const Wt = require('../models/whitelistAppModel');
const SupportMessage = require('../models/SupportMessageModel');
const Ticket = require('../models/Ticktmodel');
const Rule = require('../models/rule');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });
  
// get specific admin
router.post('/admin',auth,(req,res)=>{
    if(req.user.IsAdmin==true){
    Admin.findOne({userId:req.user._id},(err,data)=>{
      if(err){
        console.log(err)
      }
      else{
        if(data==null){
          res.redirect('/')
        }
        else{
          res.send({userId:data.userId,
            Rank:data.Rank,userPhoto:data.userPhoto,FullName:data.FullName,Role:data.Role})
        }
      }
    })
}
  })

router.post('/vadminrank',auth,async(req,res)=>{
  if(req.user.IsAdmin==true){
    let currentadmin=Admin.findOne({userId:req.user._id})
    if(!currentadmin){
      res.redirect('/log')
    }
    if(currentadmin.Rank>=req.body.Rank){
      res.redirect(req.body.url)
    }
    else{
      res.redirect('/admin/dash/admins/list')
    }
  }
})
// add admin to list
router.post('/add/admin',auth, async (req, res) => {
    if(req.user.IsAdmin==true){
    let id = req.body.id
  
    await Admin.findOneAndUpdate({ userId: id }, { Role: req.body.Role }, function (err, result) { })
    Admin.find({}, (err, data) => {
      res.send(data)
    })
  
}
  })

  
//rank change admin
router.post('/admin/rank',auth, async (req, res) => {
    if(req.user.IsAdmin==true){
     
    let id = req.body.id
  
    await Admin.findOneAndUpdate({ userId: id }, { Rank: req.body.Rank }, function (err, result) { })
    Admin.find({}, (err, data) => {
      res.send(data)
    })
}
  
  })
  // put user to admin
router.post("/admin/put",auth, async (req, res) => {
    if(req.user.IsAdmin==true){
    let id = req.body._id
    await User.findByIdAndUpdate(id, req.body, function (err, result) {
  
      Admin.findOneAndDelete({ userId: req.body.userId }, (err, data) => {
        if (err) {
  
        }
        else {
          if (data == null) {
            let x = {
              FullName: req.body.FullName,
              Email: req.body.Email, userPhoto: req.body.userPhoto, DiscordID: req.body.DiscordID, Role: req.body.Role, Rank: "0", IsAdmin: true, userId: req.body._id
          
            }
  
            let admin = new Admin(x)
            admin.save()
          }
  
        }
      })
  
  
  
  
    })
  
    User.find({}, (err, data) => {
      res.send(data.map(el=>{return{
        _id:el._id,
        FullName:el.FullName,
        Email:el.Email,
        DiscordID:el.DiscordID,
        IsAdmin:el.IsAdmin
              }}))
    })
  
}
  
  })
  



//add New rule
router.post('/rule/add',auth, (req, res) => {
    if(req.user.IsAdmin==true){
    let newRule = new Rule({ ...req.body })
    newRule.save()
    res.send({ msg: "success", data: newRule })
  
  
    }
  
  })
  //get all staff application
  router.post('/staffapplications',auth, (req, res) => {
      if(req.user.IsAdmin==true){
        StaffApplication.find({},(err,data)=>{
            res.send(data)
          })
      }
  
    
    
    
    
    })



    //Admin Staff Application Dashboard
router.post('/staff/application/:id',auth, async (req, res) => {
    if(req.user.IsAdmin==true){
    let id = req.params.id
  
    await StaffApplication.findOneAndUpdate({ _id: id }, { State:req.body.state }, function (err, result) { })
    StaffApplication.find({}, (err, data) => {
      res.send(data)
    })
  
}
  })
  //admin get whitelist
router.post('/wt/application',auth, (req, res) => {
    if(req.user.IsAdmin==true){

 Wt.find({},(err,data)=>{
      if(err){
    
      }
      else{
        res.send(data)
      }
    })
    
    
    
}
    
    })
    

    //admin correction whitelist
router.post('/wt/corr/:id',auth, async (req, res) => {
    if(req.user.IsAdmin==true){
    let id = req.params.id
  
    await Wt.findOneAndUpdate({ _id: id }, { state:req.body.state }, function (err, result) { })
    Wt.find({}, (err, data) => {
      res.send(data)
    })
  
}
  })
//all support messages
  router.post("/support/all",auth,(req,res)=>{
    if(req.user.IsAdmin==true){
    SupportMessage.find({}, (err, data) => {
      res.send(data)
    })
}
  })
  
//send support admin message
router.post("/sendSupportEmail",auth,(req,res)=>{


    if(req.user.IsAdmin==true){
  
    let messageUser=req.body
    let mailOptions = {
      from: 'noreply@tunisianhoods.com',
      to: messageUser.Email,
      subject: messageUser.Subject,
      text:messageUser.AdminRes
    };
  
    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        return log(err);
      }
      return log('Email sent!!!');
    });
}
  })
    ////==get admin ticket
    router.post('/tickets/all',auth, (req, res) => {
        if(req.user.IsAdmin==true){


        Ticket.find({},(err,data)=>{
          if(err){
    
          }
          else{
            res.send(data)
          }
        })
    }
    })

//get all tickets and reject accept them
    router.post('/ticket/corr/:id',auth, async (req, res) => {
        if(req.user.IsAdmin==true){
        let id = req.params.id
      
        await Ticket.findOneAndUpdate({ _id: id }, { state:req.body.state,MessageAdmin:req.body.MessageAdmin }, function (err, result) { })
        Ticket.find({}, (err, data) => {
          res.send(data)
        })
      
    }
      })
      


module.exports = router;