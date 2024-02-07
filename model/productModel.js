const path = require("path");
const fs = require("fs");
const { json } = require("body-parser");
module.exports = class Product {
  constructor(title) {
    this.title = title;
  }
  save() {
    const p = path.join(
      path.dirname(process.main.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, data) => {
      let products = [];
      if (!err) {
        products = json.parse(data);
      } else {
        products.push(this);
      }
    });
    fs.writeFile(p, JSON.stringify(products), (err) => {
      console.log(err);
    });
  }
  fetchAll() {
    const p = path.join(
      path.dirname(process.main.filename),
      "data",
      "products.json"
    );
    ب;
    fs.readFile(p, (err, data) => {
      if (err) {
        return [];
      } else {
        return JSON.parse(data);
      }
    });
  }
};
