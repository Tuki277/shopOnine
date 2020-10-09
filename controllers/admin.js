const session = require('session');
const postProduct = require('../models/postProduct');
const postcategory = require('../models/postCategory');

module.exports = {
    login : function (req, res) {
        res.render('admin/login')
    },

    adminSite : function (req, res) {
        res.render('admin/adminSite')
    },

    postCategory : function (req, res) {
        res.render('admin/postCategory')
    },

    postProduct : async (req, res) => {
        const postCategory = await postcategory.find().lean().sort()
        res.render('admin/postProduct', { postCategory : postCategory })
    },

    authenLogin : function (req,res) {
        if (req.body.username == 'admin' && req.body.password == 'admin123'){
            res.render('admin/adminSite')
        }
        else{
            res.send('Login Fail')
        }
    }
}