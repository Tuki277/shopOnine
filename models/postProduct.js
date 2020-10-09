const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postProduct = new Schema ({
    name : {
        type : String,
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    detail : {
        type : String,
        require : true
    },
    size : {
        type : String,
        require : true
    },
    image : {
        type : String,
        require : true
    },
    list : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model('postProduct', postProduct);