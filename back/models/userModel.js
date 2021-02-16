const mongoose=require ('mongoose')
var schema=mongoose.Schema
userSchema=new schema ({
FullName:{type:String,required:true},
Email:{type:String,required:true},
Password:{type:String,required:true},
userPhoto:{type:String,required:false,default:"https://cdn.discordapp.com/avatars/352501190958907395/7a923cd3fb41079e0f98a6363df07306.png?size=1024"},
DiscordID:{type:String,required:true},
Country:{type:String,required:true,default:"TUN"},
State:{type:String,required:true,default:"Tunis"},
Current_position:{type:String,required:true,default:"TUN"},
verifiedEmail:{type:Boolean,default:false},
IsAdmin:{required:true,type:Boolean,default:false},
Emailtoken: { type: String, required: true },
DateInscription: { type: Date, required: false ,default:new Date().toDateString()}





})


var User=mongoose.model('users',userSchema)
module.exports = User;
