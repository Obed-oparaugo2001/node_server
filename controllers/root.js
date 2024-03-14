const path = require("path");
const User = require ("../newUser"); 

async function saveUser(f_n,l_n,e_m){
    const user = new User({
        firstName:f_n,
        lastName:l_n,
        email:e_m
    });
    await user.save()//.then(()=>console.log('user saved'))
    console.log('user saved')
 }

let indexController = (req,res)=>{
    if(req.query) console.log('request Query: ',req.query);
    console.log(req.url, req.method);
    res.sendFile(path.join(__dirname, "..","/views", "index.html"));
}
let userController =(req,res)=>{
    const users = User.find().then(data => res.json({users: data}) );
}
let signupController =  (req,res)=>{
    // console.log(req.body);
     const firstName = req.body.first_name;
     const lastName = req.body.last_name;
     const email = req.body.email;
     /*const user = new User({
         firstName:firstName,
         lastName:lastName,
         email:email});
         console.log("Name:" + firstName,lastName + "Email" + email)
         user.save().then( ()=> console.log("user saved")) */
     saveUser(firstName,lastName,email)    
     //console.log(`First Name:  ${firstName} \t Last Name: ${lastName} \t  Email: ${email}`)
     //res.send(`<h1 style="font-family:monospace"> welcome ${firstName.toUpperCase() } \t ${lastName.toUpperCase()}
     // your new account have been processed and complete </h1>`)
     res.sendFile(path.join(__dirname,'..', 'views','dashboard.html'))
     
 }

 let userParamsController = (req,res) => {
    User.findOne({_id:req.params.id}).then((value)=>{
    res.send(value)
   })
  
   //console.log(req.params.id)
   }
module.exports = {
    indexController,
    userController,
    signupController,
    userParamsController
}