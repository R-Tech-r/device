const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
deviceId:{
type:Number,
unique:true}, 
deviceName: String,
status: String,
lastServiceDate: String
});

const Device = mongoose.model('device', deviceSchema);

module.exports = Device;