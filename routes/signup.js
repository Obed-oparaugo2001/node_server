const express = require("express");
const router = express.Router();
//const path = require("path")
//const User = require ("../newUser"); 
const { userController, indexController, signupController, userParamsController} = require('../controllers/root')

router.get('^/$|index(.html)?',indexController);
router.get('/users',userController)

router.post("/sign-up",signupController);

 router.get('/users/:id',userParamsController)
module.exports = router