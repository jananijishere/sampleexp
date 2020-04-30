const mongoose = require('mongoose')
const standupSchema = new mongoose.Schema({
    ProductName: { type: String},
    ProductDesc: { type: String},
    ProductPrice: { type: Number },
    ManuDate: { type: Date,default: Date.now},
    ExpDate: { type: Date,default: Date.now}
    
})
module.exports = mongoose.model('Standup',standupSchema)