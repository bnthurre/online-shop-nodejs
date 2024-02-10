const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const adminController = require('../controllers/admin')

const router = express.Router();

//get add product
router.get("/add-product", adminController.getAddProduct);

// get products
router.get("/products", adminController.getProducts);


router.post("/add-product", adminController.postAddProduct);
module.exports = router;
