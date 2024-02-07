const Product = require('../model/productModel');

//get add product
exports.getAddProduct = (req, res, next) => {
    res.render("add-product", {
      pageTitle: "Add product",
      path: "/admin/add-product",
      activeProduct: true,
      formCss: true,
      productCss: true,
    })
};

//post add product
exports.postAddProduct =  (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
  }

// get product
exports.getProduct = (req, res, next) => {
    const products = new Product.fetchAll();
    res.render("shop", {
      prod: products,
      pageTitle: "Shop",
      path: "/",
      hasProduct: products.length > 0,
      activeShop: true,
      productCss: true,
    });
  }