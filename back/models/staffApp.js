const mongoose=require ('mongoose')
var schema=mongoose.Schema
StaffApp=new schema ({
userId:{type:String,required:true},
State:{type:String,required:true,default:'in progress'},
Date: { type: Date, required: false ,default:new Date().toDateString()},
Q1:{type:String,required:true},
Q2:{type:String,required:true},
Q3:{type:String,required:true},
Q4:{type:String,required:true},
Q5:{type:String,required:true},
Q6:{type:String,required:true},
Q7:{type:String,required:true},
Q8:{type:String,required:true},
Q9:{type:String,required:true},
Q10:{type:String,required:true},
Q11:{type:String,required:true},
Q12:{type:String,required:true},
Q13:{type:String,required:true},
Q14:{type:String,required:true},
Q15:{type:String,required:true},
Q16:{type:String,required:true},
Q17:{type:String,required:true},
Q18:{type:String,required:true},
Q19:{type:String,required:true},
Q20:{type:String,required:true},
Q21:{type:String,required:true},
Q22:{type:String,required:true},
Q23:{type:String,required:true},
Q24:{type:String,required:true},
Q25:{type:String,required:true},
Q26:{type:String,required:true},
Q27:{type:String,required:true},
Q28:{type:String,required:true},
Q29:{type:String,required:true},
Q30:{type:String,required:true},
Q31:{type:String,required:true},
Q32:{type:String,required:true}
})


var StaffApplication=mongoose.model('StaffApplication',StaffApp)
module.exports = StaffApplication;
