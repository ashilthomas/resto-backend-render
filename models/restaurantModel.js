const mongoose = require("mongoose");


const restaurantSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter restaurant name "]
    },
    address:{
        type:String,
        required:[true,'please enter retaurant address']
    },
    neghborhood:{
        type:String,
         required:[true,'Please enter restaurant neghbourhood']
    },
    photograph:{
        type:String,
        // required:[true,'please enter restaurant photograph']
    }
})

module.exports = mongoose.model('userslist',restaurantSchema)