
const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/auth");

router.post("/signup", (req,res,next)=>{
  AuthController.Signup(req, res);
})

router.post("/login" , (req, res ,  next)=>{
  AuthController.Login(req, res);
})

module.exports = router;
