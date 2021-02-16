const mongoose=require ('mongoose')
var schema=mongoose.Schema
BugSchema=new schema ({
userId:{type:String,required:true},
FullName:{type:String,required:true},
Email:{type:String,required:true},
Subject:{type:String,required:true},
Message:{type:String,required:true}
})


var Bug=mongoose.model('Bugs',BugSchema)
module.exports = Bug;
