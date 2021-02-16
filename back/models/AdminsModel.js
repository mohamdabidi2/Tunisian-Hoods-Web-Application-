const mongoose=require ('mongoose')
var schema=mongoose.Schema
AdminSchema=new schema ({
    userId:{type:String,required:true},
FullName:{type:String,required:true},
Email:{type:String,required:true},
userPhoto:{type:String,required:false,default:"https://cdn.discordapp.com/avatars/352501190958907395/7a923cd3fb41079e0f98a6363df07306.png?size=1024"},
DiscordID:{type:String,required:true},
Role:{type:String,required:true,default:"server Mod"},
Rank:{type:String,required:true,default:"0"},
IsAdmin:{type:Boolean,default:true},






})


var Admin=mongoose.model('Admins',AdminSchema)
module.exports = Admin;
