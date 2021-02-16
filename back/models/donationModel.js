const mongoose = require('mongoose')
var schema = mongoose.Schema
donateSchema = new schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },  
    streetAddress: { type: String, required: true },
    town: { type: String, required: true },
    apartment: { type: String, required: false },
    state: { type: String, required: true },
    postcode: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    userId: { type: String, required: true },
    payment: { type: String, required: true },
    Date: { type: Date, required: false ,default:new Date().toDateString()},
    Cart: { type: Array, required: true }









})


var Donation = mongoose.model('donations', donateSchema)
module.exports = Donation;
