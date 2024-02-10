const express = require("express");
const shopController = require('../controllers/shop');

const router = express.Router();

router.get("/", shopController.getIndex );

///products
router.get("/products", shopController.getProduct);

//cart
router.get('/cart', shopController.getCart);

//checkouts
router.get('/checkout', shopController.getCheckout);



module.exports = router;
