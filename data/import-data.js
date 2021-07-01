const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const Device = require('../models/deviceModel');

dotenv.config({path:'./config.env'});


// const PORT = process.env.PORT
const DB =process.env.DATABASE

mongoose.connect(DB, {
 useNewUrlParser:true,
 useCreateIndex:true,
 useFindAndModify:false,
 useUnifiedTopology:true
}).then(()=>{
 console.log('Database Successfully Connected');
})

const devices = JSON.parse(
fs.readFileSync(`${__dirname}/data.json`,'utf-8'));

// Importing Data into Db

const importData = async () => {
 console.log(devices)
 try{
await Device.create(devices);
console.log('success')
 }catch(err){
  console.log(err)
 }
}


const deleteData = async ()=>{
 try{
await Device.deleteMany();
console.log('success')

 }catch(err){
  console.log('Failed')
 }
}
console.log(process.argv);

 if (process.argv[2] === '--import'){
  importData();
 } else if (process.argv[2] === '--delete'){
  deleteData();
 }
