const express=require("express");
const bodyParser=require("body-parser");

const app=express();
const port=process.env.PORT|| 3000
require('dotenv').config();
app.use(bodyParser.json());//to parse application/json 
// TO SET CORS
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods',"'POST','GET','DELETE','PUT','FETCH'");
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})

const feedRoutes=require("./routes/feed");


app.use(feedRoutes);

app.listen(port,()=>{
    console.log("Working at Port",port);
})
