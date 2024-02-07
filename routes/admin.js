const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const productcontroller = require('../controllers/productController')

const router = express.Router();

//get product
router.get("/add-product", productcontroller.getAddProduct);

router.post("/add-product", productcontroller.postAddProduct);
module.exports = router;
