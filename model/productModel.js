const products = [];
const path = require("path");
const fs = require("fs");
const { json } = require("body-parser");
module.exports = class Product {
  constructor(titl) {
    this.title = titl;
  }
  save() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }
  static fetchAll() {
    const p = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );
    fs.readfile(p, (err, fileContent)=>{
      if(err){
        return [];
      }
      products= JSON.parse(fileContent);
    })
  }
};
