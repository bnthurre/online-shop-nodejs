const Product = require("../model/productModel");

//get add product
exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
    activeProduct: true,
    formCss: true,
    productCss: true,
  });
};

//post add product
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageURL = req.body.imageURL;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageURL, price,description);
  product.save();
  res.redirect("/");
};

//
exports.getProducts =(req,res,next)=>{
  Product.fetchAll((products) => {
    res.render("admin/products", {
      prod: products,
      pageTitle: "Admin products",
      path: "/admin/products",
    });
  });
}