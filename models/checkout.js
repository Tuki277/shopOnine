const mongoose = require('mongoose')
const Schema = mongoose.Schema

const checkOut = new Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    note: {
        type: String,
        require: false
    },
    cart: {
        type: Array,
        require: true
    }
})

module.exports = mongoose.model('checkOut', checkOut)