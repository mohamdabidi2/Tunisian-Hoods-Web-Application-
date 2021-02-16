const mongoose = require('mongoose')
var schema = mongoose.Schema
MerchSchema = new schema({
    ProductName: { type: String, required: true },
    ProductPrice: { type: String, required: true },
    ProductPhoto: { type: String, required: true ,default:"https://i.imgur.com/w7e9aTD.jpg"},
ProductDescription:{type: String, required: true }










})


var Merch = mongoose.model('Merchs', MerchSchema)
module.exports = Merch;
