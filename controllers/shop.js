const postproduct = require('../models/postProduct')
const postcategory = require('../models/postCategory')
const Cart = require('../models/cart')
const session = require('express-session')

module.exports = {
    index: async (req, res) => {
        const postProduct = await postproduct.find().lean().sort()
        const postCategory = await postcategory.find().lean().sort()
        res.render('homepage/index', { postProduct: postProduct, postCategory: postCategory, session: req.session })
    },

    about: function (req, res) {
        res.render('homepage/about')
    },

    shop: async (req, res) => {
        const postProduct = await postproduct.find().lean().sort()
        res.render('homepage/shop', { postProduct: postProduct, session : req.session })
    },

    contact: function (req, res) {
        res.render('homepage/contact', { session : req.session })
    },

    detailProduct: async (req, res) => {
        const postProduct = await postproduct.findOne({ _id: req.params.id }).lean()
        res.render('homepage/detailProduct', { postProduct: postProduct, session: req.session })
    },

    cart: async (req, res, next) => {
        const postProduct = await postproduct.findOne({ _id: req.params.id }).lean()
        console.log(req.session.cart)
        const cart = new Cart(req.session.cart)
        const cartProduct = cart.getItems();
        res.render('homepage/cart', { postProduct: postProduct, cartProduct: cartProduct, session: req.session })
    },

    checkout: function (req, res) {
        const cart = new Cart(req.session.cart)
        const cartProduct = cart.getItems();
        res.render('homepage/checkout', { session: req.session, cartProduct : cartProduct })
    },
    thankyou: function (req, res) {
        res.render('homepage/thankyou')
    }
}