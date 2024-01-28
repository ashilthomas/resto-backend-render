const mongoose = require("mongoose")


const databaseConnection = ()=>{

mongoose.connect(process.env.DR_URI,{
  
})
    .then((res) => console.log(`database connected with ${res.connection.host}`))
    .catch((err) => console.log(err.message))
}

module.exports = databaseConnection