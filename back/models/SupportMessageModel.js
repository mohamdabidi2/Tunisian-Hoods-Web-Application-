const mongoose=require ('mongoose')
var schema=mongoose.Schema
SupportMessageModel=new schema ({
    FullName:{type:String,required:true},
    Email:{type:String,required:true},
    DiscordID:{type:String,required:true},
    Subject:{type:String,required:true,default:"REPORT"},
    Message:{type:String,required:true},
    AdminRes:{type:String,required:false,default:""},
    DateCreation: { type: Date, required: false ,default:new Date().toDateString()}





})


var SupportMessage=mongoose.model('Support',SupportMessageModel)
module.exports = SupportMessage;
