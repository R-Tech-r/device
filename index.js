const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');

// const deviceController=require('./controllers/deviceController')
const deviceRouter = require('./routes/deviceRoutes')

const app = express();


  app.use(cors({origin:'http://localhost:4200'}))

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;
const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Successfully Connected");
  });

app.use(express.json());

// route Handler

app.use("/api/v1/device",deviceRouter)



app.listen(PORT, () => {
  console.log(`Server Listening at ${PORT}`);
});
