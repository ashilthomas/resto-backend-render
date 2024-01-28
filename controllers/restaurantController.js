const Restaurant = require('../models/restaurantModel')


exports.addRestaurant = async (req,res)=>{
 
    const { name ,  address, neghborhood }= req.body

 const  photograph =req.file.path

   try {
    const restaurant = await Restaurant.create({
        name,
        address,
        neghborhood,
       photograph
    })
    
    console.log(restaurant);
    if(!restaurant){
        return res.status(404).json({
            succes:false,
            message:"restaurant registretion failed"
        })
    }
    res.status(200).json({
    
        succes:true,
        message:'restaurant registration succesfuly comepleated',
        restaurant
    })
   } catch (error) {

    res.status(404).json({
        succes:false,
        message:error.message
    })


   }
}

exports.getRestaurant = async(req,res)=>{
   try {
    const restaurant = await Restaurant.find()

    if(!restaurant){
      return  res.status(404).json({
            succes:false,
            message:"reataurant not found"
        })
    }

    res.status(200).json({
         succes:true,
         restaurant
    })

   } catch (error) {
    res.status(404).json({
        succes:false,
        message: error.message
    })
   }
}
