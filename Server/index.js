const express = require("express");
const mongoose = require("mongoose");
const User = require("./MongoDB/User");
const app = express();
app.use(express.json());
const url = "mongodb+srv://pratik:pratik@cluster0.kktrp4r.mongodb.net/?retryWrites=true&w=majority";
const conn=mongoose.connect(url).
  catch(error => handleError(error));
  if(conn){
    console.log('connected');
  }
  else{
    console.log('not connected')
  }

  
app.listen(5000, () => {
    console.log("Server is running at port 5000");
  }); 

