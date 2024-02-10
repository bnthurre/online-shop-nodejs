const Product = require("../model/productModel");
// get product
exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prod: products,
      pageTitle: "All products",
      path: "/products",
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
exports.getCart =(req,res,next)=>{
  res.render("shop/cart", {
    path: '/cart',
    pageTitle: "Your Cart"
  })
}

// 
exports.getCheckout = (req,res,next)=>{
  res.render('shop/checkout',{
    path: '/checkout',
    pageTitle : 'checkouts'
  })

}
