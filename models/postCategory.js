const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postCategory = new Schema ({
    list : {
        type : String,
        require : true
    },
    name_crate : {
        type : String,
        require : true
    },
    image : {
        type : String,
        require : true
    }
})

module.exports = mongoose.model('postCategory', postCategory)