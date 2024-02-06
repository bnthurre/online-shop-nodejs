const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const products = [];

const router = express.Router();

router.get('/add-product',(req, res,next)=>{
   res.render('add-product', {pageTitle: "Add product", path: '/admin/add-product'})
})
router.post('/add-product', (req, res, next)=>{
    products.push({title: req.body.title});
    res.redirect('/');
})
module.exports.routes  = router;
module.exports.products = products