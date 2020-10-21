const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop');
const adminController = require('../controllers/admin');
const multer = require('multer');
const upload = multer({ dest : './public/uploads' }).fields([{ name : 'img', maxCount : 1  },
                                                           { name : 'img1', maxCount : 1  }])
const postProduct = require('../models/postProduct');
const postCategory = require('../models/postCategory');
const checkOut = require('../models/checkout');

// router GET
router.get('/', shopController.index);

router.get('/about', shopController.about);

router.get('/shop', shopController.shop);

router.get('/contact', shopController.contact);

router.get('/shop/:id', shopController.detailProduct);

router.get('/cart', shopController.cart);

router.get('/checkout', shopController.checkout);

router.get('/thankyou', shopController.thankyou);

router.get('/report', adminController.report);

router.get('/login', adminController.login);

router.get('/add/postProduct', adminController.postProduct);

router.get('/add/postCategory', adminController.postCategory);


// router Post
router.post('/login', adminController.authenLogin);

router.post('/checkout', function (req, res) {

    console.log(req.body)
    console.log(req.session.cart)

    const checkOutProduct = new checkOut({
        name : req.body.name,
        address : req.body.address,
        phone : req.body.phone,
        note : req.body.note,
        cart : req.session.cart
    })

    checkOutProduct.save()
    res.redirect('/thankyou')
})

router.post('/postCategory', upload, function (req, res) {
    const {
        list,
        name_crate
    } = req.body

    const image = req.files['img1'][0].path.split('\\').slice(1).join('\\')

    const newPostCategory = {
        list : list,
        name_crate : name_crate,
        image : image
    }

    const newPost = new postCategory(newPostCategory)
    newPost.save()

    res.redirect('/add/postCategory')
})

router.post('/postProduct', upload, function (req, res) {
    const {
        name,
        price,
        detail,
        size,
        list
    } = req.body

    const image = req.files['img'][0].path.split('\\').slice(1).join('\\')

    const newPostProduct = {
        name : name,
        price : price,
        detail : detail,
        size : size,
        image : image,
        list : list
    }

    const newPost = new postProduct(newPostProduct)
    newPost.save()

    res.redirect('/add/postProduct')
})

module.exports = router;