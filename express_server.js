const express = require("express");
//const http = require("http");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 5000 ||  process.env.PORT;

 mongoose.connect("mongodb://localhost:27017/expressApp", console.log("connected") );
app.use('/',express.static(path.join(__dirname, "asserts","css")));
app.use(express.urlencoded({extended:false}))
app.use('/',require('./routes/signup') ); 
app.use('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})
app.listen(port, () => console.log(`server running on port ${port}`));
 