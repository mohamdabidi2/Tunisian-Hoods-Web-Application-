const mongoose = require('mongoose')
var schema = mongoose.Schema
DonationSchema = new schema({
    ProductName: { type: String, required: true },
    ProductPrice: { type: String, required: true },
    ProductPhoto: { type: String, required: true ,default:"zzz"},
    ProductCategory: { type: String, required: true },










})


var Product = mongoose.model('DonationProducts', DonationSchema)
module.exports = Product;
