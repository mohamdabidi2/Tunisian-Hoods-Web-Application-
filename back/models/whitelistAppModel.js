const mongoose = require('mongoose')
var schema = mongoose.Schema
WtSchema = new schema({
userId: { type: String, required: true },
state: { type: String, required: true,default:"in progress" },
Date: { type: Date, required: false ,default:new Date().toDateString()},
DiscordUserName: { type: String, required: true },
age : { type: String, required: true },
joinTH : { type: String, required: true },
MicroPhone: { type: String, required: true },
ExperienceinRP: { type: String, required: true },
charactername: { type: String, required: true },
backstory: { type: String, required: true },
firstambitions: { type: String, required: true },
meaningofRP: { type: String, required: true },
Powergaming: { type: String, required: true },
Metagaming: { type: String, required: true },
vol: { type: String, required: true },
revengekill: { type: String, required: true },
greenzone: { type: String, required: true },
RedZone: { type: String, required: true },
NoRobberyZone: { type: String, required: true },
copbaiting: { type: String, required: true },
combatlogging: { type: String, required: true },
combatStoring: { type: String, required: true },
MaxFiScene: { type: String, required: true },
doMe: { type: String, required: true },
Scene1: { type: String, required: true },
Scene2: { type: String, required: true },
SceneFAILET: { type: String, required: true },
FailMin: { type: String, required: true } 






})


var Wt = mongoose.model('RequestWhitelist', WtSchema)
module.exports = Wt;
