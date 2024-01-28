const mongoose = require("mongoose");
const valietor = require('validator');



const userSchema = new mongoose.Schema({// DB lekk save cheyunna data kku conditon vakan
    fullname : {
      type:String,
      minLength:[3,"full name should have minimum 3 characters"],
      maxLength:[20,"full name shouldn't excced 20 characters"],
      required:[true,"please enter full name"]
    },
    email :{
      type:String,
      required:[true,"please enter full email"],
      unique:true,
      validate:[valietor.isEmail, "please enter a valid email"]
    },
   password : {
    type:String,
    required:[true,"please enter full password"]
   }
  })


module.exports = mongoose.model('users',userSchema)