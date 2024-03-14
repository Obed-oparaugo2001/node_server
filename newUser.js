const mongoose = require("mongoose");

//const connection = mongoose.createConnection({ host:""})

 const userSchema  = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email: String
 }) 

module.exports = mongoose.model("User", userSchema)