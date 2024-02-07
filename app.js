const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbr= require('express-handlebars');

const app = express();

//using handlerbars
app.engine('hbs', expressHbr());
app.set("view engine", "hbs");
app.set('views', "views");

// using pug engine
// app.set("view engine", "pug");
// app.set('views', "views");


const adminData = require("./router/admin");
const shopRoute = require("./router/shop");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoute);
app.use("/admin", adminData.routes);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle:'page not found'});
});

app.listen(9000);
