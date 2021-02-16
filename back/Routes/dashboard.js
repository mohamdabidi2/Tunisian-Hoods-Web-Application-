const router = require('express').Router();
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const auth = require('../VTOKEN');
const StaffApplication = require('../models/staffApp');
const SupportMessage = require('../models/SupportMessageModel');
const nodemailer = require("nodemailer");
const HtmlEmail = require('../Mail');
const Wt = require('../models/whitelistAppModel');
const Ticket = require('../models/Ticktmodel');
const Bug = require('../models/bugsReport');
const PacksDonate = require('../models/packsModel');
const Product = require('../models/DonationPacks');
const Donation = require('../models/donationModel');
const Admin = require('../models/AdminsModel');
const Rule = require('../models/rule');
const Merch = require('../models/MerchModel');
const log=console.log

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});


router.post("/user",auth,(req,res)=>{
    User.findOne({_id:req.user._id},(err,data)=>{
        if(err)console.log(err)
        else if(!data){
            return res.status(400).send('user not exist');
        }
        else{
            res.send({_id:data.id,FullName:data.FullName,State:data.State,Country:data.Country,DiscordID:data.DiscordID,userPhoto:data.userPhoto,Email:data.Email,IsAdmin:data.IsAdmin})
        }
    })
})

router.post("/info",auth,async(req,res)=>{
let info={}
const userinfo= await User.findOne({_id:req.user._id})
const whitelistState=await Wt.findOne({userId:req.user._id})
const staffState=await StaffApplication.findOne({userId:req.user._id})
const tickets=await Ticket.find({userId:req.user._id})
const bug=await Bug.find({userId:req.user._id})



info._id=userinfo._id
info.FullName=userinfo.FullName
info.logo=userinfo.FullName[0].toUpperCase()

info.WtState=whitelistState?whitelistState.state:"No Application"
info.StaffState=staffState?staffState.State:"No Application"
info.userPhoto=userinfo.userPhoto
info.IsAdmin=userinfo.IsAdmin
info.AcceptedTicket=tickets.filter(el=>el.state=="accepted").map(el=>{return{_id:el._id,Message:el.Message}})
info.TicketsNum=tickets.length
info.BugNum=bug.length
res.send(info)




})
router.post("/staffapp",auth,(req,res)=>{
    StaffApplication.findOne({userId:req.user._id},(err,data)=>{
  if(data==null){
    res.send({State:"No Application"})
  }
  else{
    res.send({State:data.State})
  }
    })
  })


  //Edit Profile Info
// router.post('/profile/edit', auth,async (req, res) => {
//     let id = req.user._id
  
  
//     await User.findOneAndUpdate({ _id: id }, {...req.body},async function (err, result) { 
//   if(result.IsAdmin==true){
//     await  Admin.findOneAndUpdate({userId:req.user._id},{FullName:result.FullName},function (err, result) { })
//   }
    
      
//     })
  
  
  
//   })

router.post('/veriflog',auth,async(req,res)=>{

await User.find({_id:req.user._id},(err,data)=>{
  if(!data){
    res.send("/register")
  }

  if(data[0].verifiedEmail==true){
    res.send("/dashboard")
  }
if(data[0].verifiedEmail==false){
res.send('/confirm')
  }

})
})

  //get user info to dashboard
router.post('/isLoged',auth, (req, res) => {
  User.find({_id:req.user._id},(err,data)=>{

 if(data.verifiedEmail==true){
  res.send({_id:req.user._id,IsLoged:true,verifiedEmail:data.verifiedEmail})
}
  })

  })


//get email from user
router.post('/emailUser',auth,(req,res)=>{
res.send(req.user.Email) 
})
  // resend email confirmation
  router.post('/resendEmail',auth, (req, res) => {
    let id = req.user._id
    User.findOne({ _id: id }, (err, doc) => {
      if (err) {
     res.status(400).send(err)
      }
      else {
        let mailOptions = {
          from: 'noreply@tunisianhoods.com',
          to: doc.Email,
          subject: "Email Confirmation",
          html: HtmlEmail(doc)
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
  })
  router.get('/verify=:token', async (req, res) => {
    let token = req.params.token
    User.findOne({ Emailtoken: token }, (err, doc) => {
      if (err) {
        res.send("err")
      }
      else {
      
        doc.verifiedEmail = true
        doc.save()
        const token = jwt.sign({_id: doc._id,verifiedEmail:doc.verifiedEmail,IsAdmin:doc.IsAdmin,Email:doc.Email}, process.env.SCERET_KEY);
        res.header('authToken', token).redirect('/log');
      }

  
    })
  
  
  
  })





  //get whitelist result
router.post("/wtResult",auth,(req,res)=>{
    Wt.find({userId:req.user._id}, (err, data) => {
      res.send(data)
    })
  })

  //get all whitelist results
  
router.post('/allwt',auth, (req, res) => {


  Wt.find({},(err,data)=>{
    if(err){
  
    }
    else{
      res.send(data)
    }
  })
  
  
  
  
  
  })





  //add ticket

//-------------------------------------------------------------------

router.post('/add/ticket',auth, (req, res) => {
  Ticket.findOne({ userId: req.user._id,state:"in progress" }, (err, data) => {
    if (err) {

    }
    else {

      if (data == null) {

    
        let ticket = new Ticket({ ...req.body, userId:req.user._id })
        ticket.save()
        res.send({ msg: "success", data: ticket,err:false })

      }
      else {
        res.send({ msg: "Stop Spaming Tickets",err:true })
      }
    }
  })



})



//----------------------------------------------------------------------
   //get tickets user
 router.post('/alltickets',auth, (req, res) => {


  Ticket.find({userId:req.user._id},(err,data)=>{
    if(err){

    }
    else{
      res.send(data)
    }
  })})


  
  //bug report add
router.post('/bugreport',auth, (req, res) => {
  
  let mailOptions = {
  from: 'noreply@tunisianhoods.com',
  to: req.body.Email,
  subject:req.body.Subject ,
  text:req.body.Message
};

// Step 3
transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    return log(err);
  }
  return log('Bug reported');
});

  
let newBug = new Bug({ ...req.body ,userId:req.user._id})
newBug.save()
res.send({ msg: "success", data: newBug })

   
 


})
//send message support
router.post('/support', (req, res) => {

  let newMessage = new SupportMessage({ ...req.body })
  newMessage.save()
  res.send({ msg: "success", data: newMessage })




})




//add new staff application
router.post('/staffapp',auth, (req, res) => {
  StaffApplication.findOne({userId:req.user._id},(err,data)=>{
    if(data==null){
      let staff = new StaffApplication({ ...req.body })
      staff.save()
      res.send({ msg: "success", data: staff })
    }
    else if(data.State=="Accepted"){
      res.send("Congratulations! Your application has been approved")
    }
    else if(data.State="Rejected"){
      res.send("Stop spaming requests")
    }
  })


  
  
  
  
  })




  //whitlist add one
router.post('/whitelistapp',auth, (req, res) => {


    
  Wt.findOne({userId:req.user._id},(err,data)=>{
  if(data==null){
    let Whitelist = new Wt({ ...req.body ,userId:req.user._id})
    Whitelist.save()
    res.send({ msg: "success", data: Whitelist })
  }
  else if(data.state=="Rejected"){
  
    Wt.findOneAndUpdate({userId:data.userId},{...req.body,state:"in progress"},function (err, result) { })
    res.send(data)
  }
  else if(data.state=="Accepted"){
    res.send('stop spaming requests')
  }
  })
  
   
  
  
  
  })


  
//Buy a pack 
router.post('/buypack',auth, (req, res) => {

  User.find({_id:req.body.userID}).then((data)=>{
    let messageUser=req.body
    let mailOptions = {
      from: 'noreply@tunisianhoods.com',
      to: "tunisianhoods.contact@gmail.com",
      subject: "Buying a "+ messageUser.Pack+" Pack ",
      text:` mr/miss :${messageUser.FullName}  
      Want to buy a ${messageUser.Pack} Pack
      his/her Phone Number : ${messageUser.Phone},  
      Email: ${messageUser.Email} 
      payment method : ${messageUser.Payment} `
    };
    let pack = new PacksDonate({ ...req.body })
    pack.save()
    res.send({ msg: "success", data: pack })
    // Step 3
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        return log(err);
      }
      return log('Email sent!!!');
    });
  })

})

//get all Donation Products
router.post('/donationpacks',auth, (req, res) => {

  Product.find({}, (err, data) => {
    if (err) {
      res.send("!rule")
    }
    res.send(data)
  })

})
//new donation request
router.post('/donateftw',auth, (req, res) => {

  let messageUser=req.body
  let mailOptions = {
    from: 'noreply@tunisianhoods.com',
    to: "tunisianhoods.contact@gmail.com",
    subject: "Buying Items From TH Items Shop",
    text:`Mr/Miss :${messageUser.firstName} ${messageUser.lastName} 
    want to buy ${messageUser.Cart.map(el=>el.ProductName+" "+"x"+el.qtn)} 
     His/Her Phone Number : ${messageUser.phone} 
      E-mail: ${messageUser.email} 
      payment method: ${messageUser.payment} `
  };

  // Step 3
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return log(err);
    }
    return log('Email sent!!!');
  });

  let newDonation = new Donation({ ...req.body,userId:req.user._id })
  newDonation.save()
  res.send({ msg: "success", data: newDonation })




})
//get all staff members
router.post('/staffmembers', async(req, res) => {
  let adminlist=await Admin.find({})
if(!adminlist){
  res.send([])
}
else{
  res.send(adminlist.map(el=>{return {
 
      FullName:el.FullName,
userPhoto:el.userPhoto,
Role:el.Role
   
  }}))
}
})
router.post('/staffaccess', async(req, res) => {
  let adminlist=await Admin.find({})
if(!adminlist){
  res.send([])
}
else{
  res.send(adminlist.map(el=>{return {
 
      FullName:el.FullName,
userPhoto:el.userPhoto,
Role:el.Role,
color:el.color,
Email:el.Email,
DiscordID:el.DiscordID
   
  }}))
}
})

//get all rules
router.post('/rules', (req, res) => {

  Rule.find({}, (err, data) => {
    if (err) {
      res.send("!rule")
    }
    res.send(data)
  })

})
// get all users list
router.post('/users',auth, async(req, res) => {
  let users=await User.find({})
    
     if(!users){
       res.send([])
     }
     else{
      res.send(users.map(el=>{return{
_id:el._id,
FullName:el.FullName,
Email:el.Email,
DiscordID:el.DiscordID,
IsAdmin:el.IsAdmin
      }}))
     }
})
 //get tickets user
 router.post('/ticket',auth, (req, res) => {


  Ticket.find({userId:req.user._id},(err,data)=>{
    if(err){

    }
    else{
      res.send(data)
    }
  })})


  ///get all merchs
router.post('/Marchs', (req, res) => {
  Merch.find({},(err,data)=>{
  if(err){
    console.log(err)
  }
  else {
    res.send(data)
  }
})})

router.post("/verif/database",(req,res)=>{
 
  User.deleteMany({ verifiedEmail: false },(err,data)=>{
    if (err)console.log(err)
    else
    {
      res.send ("deleted")
    }
  })
})
//add new merch message
router.post('/buy/item', (req, res) => {
  let mailOptions = {
    from: 'noreply@tunisianhoods.com',
    to: 'tunisianhoods.contact@gmail.com',
    subject:"buying item from TH Store" ,
    text:`${req.body.FullName} : y7eb yechri ${req.body.ProductName} || Phone : ${req.body.Phone} Email : ${req.body.Email}`
  };

  // Step 3
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      return log(err);
    }
    return log('message to  admin');
  });
})
















module.exports = router;