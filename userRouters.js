const express = require('express')
const router = express.Router()
const path = require("path");
const {postRegister,userLogin,getAllUsers,updateUserDeatils,getAllUserDetails, deleteUser } = require('./controllers/userControlle')
const {verifytoken} = require("./middlewares/auth")

router.route("/register").post(postRegister);
router.route("/login").post(userLogin)
router.route("/users").get(verifytoken,getAllUsers)
router.route("/user/:id").put(verifytoken,updateUserDeatils).get(verifytoken,getAllUserDetails ).delete(verifytoken,deleteUser)


  module.exports = router






