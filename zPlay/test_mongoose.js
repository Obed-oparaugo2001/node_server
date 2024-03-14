 const mongoose = require("mongoose");
 const User = require("./user")
 mongoose.connect("mongodb://localhost:27017/expressApp",   console.log("connected") )

 run();
 async function run(){
 const user = new User({
    name:"modric",
    age:35,
    email:"modric150@gmail.com"
 });
 await user.save()
 console.log(user)
 }