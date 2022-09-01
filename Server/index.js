import express from "express"
import mongoose from "mongoose"

const app = express();

const url='mongodb+srv://pratik:pratik@cluster0.kktrp4r.mongodb.net/?retryWrites=true&w=majority'
var PORT = process.env.PORT || 5000

mongoose.connect (url,{useNewUrlParser: true, useUnifiedTopology: true }) 
.then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
.catch((error) => console.log(error.message))  