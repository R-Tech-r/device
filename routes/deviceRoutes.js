const express = require('express')

const {getAllDevices, createDevice,deleteDevice} =require('../controllers/deviceController')



const router = express.Router();

router.route('/').get(getAllDevices).post(createDevice).delete(deleteDevice);





module.exports=router