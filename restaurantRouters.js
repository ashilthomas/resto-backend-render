const express = require('express')
const { verifytoken } = require('./middlewares/auth')
const { addRestaurant, getRestaurant } = require('./controllers/restaurantController')
const upload = require('./middlewares/fileUpload')// file get cheyunna middleware
const router = express.Router()

router.route('/restaurant').post(verifytoken,upload.single('photograph'),addRestaurant)// single lekk file valllue varum
router.route('/reataurants').get(getRestaurant)


module.exports = router