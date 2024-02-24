const Product = require("../model/productModel");
// get product
exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prod: products,
      pageTitle: "All products",
      path: "/products",
    });
  });
};

//get single product
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, (product) => {
    res.render("shop/product-details", {
      pageTitle: product.title,
      path: "/products",
      product: product,
    });
  });
};

//
exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prod: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

//
exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart",
  });
};
//post cart
exports.postCart= (req,res,next)=>{
  const prodId = req.body.productId;
  console.log(prodId);
  res.redirect('/cart');
}
//
exports.getOrder = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your orders",
  });
};

//
exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "checkouts",
  });
};
