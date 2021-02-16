const mongoose=require ('mongoose')
var schema=mongoose.Schema
PacksDonate=new schema ({
Email:{type:String,required:true},
Phone:{type:String,required:true},
Payment:{type:String,required:true},
Pack:{type:String,required:false,default:""},
userID:{type:String,required:true}







})


var PacksDonate=mongoose.model('PacksDonate',PacksDonate)
module.exports = PacksDonate;
