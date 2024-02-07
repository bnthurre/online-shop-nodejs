const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const expressHbr= require('express-handlebars');

const errorController = require('./controllers/errorController');

const app = express();

//using ejs 

app.set("view engine", "ejs");
app.set('views', "views");

//using handlerbars
// app.engine('hbs', expressHbr({layoutsDir: 'views/layout', defaultLayout:'main-layout'}));
// app.set("view engine", "hbs");
// app.set('views', "views");

// using pug engine
// app.set("view engine", "pug");
// app.set('views', "views");


const adminroute = require("./routes/admin");
const shopRoute = require("./routes/shop");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoute);
app.use("/admin", adminroute);

app.use(errorController.get404Page);
app.listen(9000);
