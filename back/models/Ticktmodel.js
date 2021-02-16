const mongoose = require('mongoose')
var schema = mongoose.Schema
TicketSchema = new schema({
userId: { type: String, required: true },
Email : { type: String, required: true },
Subject : { type: String, required: true },
Message: { type: String, required: true },
state: { type: String, required: true,default:'in progress' },
MessageAdmin:{ type: String, required: false,default:"" }








})


var Ticket = mongoose.model('Tickets', TicketSchema)
module.exports = Ticket;
