
const express =require('express');
const bodyParser =require('body-parser');
const adminRoute= require('./router/admin');
const shopRoute = require('./router/shop')

const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended : false}));

app.use(shopRoute);
app.use('/admin',adminRoute);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,  'views','404.html'));
})




app.listen(9000);
