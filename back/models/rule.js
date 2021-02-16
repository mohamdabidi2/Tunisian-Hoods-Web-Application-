const mongoose = require('mongoose')
var schema = mongoose.Schema
RuleSchema = new schema({
    UserName: { type: String, required: true },
    UseRole: { type: String, required: true },
    userPhoto: { type: String, required: false ,default:"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"},
    RuleTitle: { type: String, required: true },
    Rules: { type: Array, required: true},
    RoleType: { type: String, required: true ,default:""},
    DateCreation: { type: Date, required: false, default: new Date().toDateString() },
    lag:{ type: String, required: true }







})


var Rule = mongoose.model('Rules', RuleSchema)
module.exports = Rule;
