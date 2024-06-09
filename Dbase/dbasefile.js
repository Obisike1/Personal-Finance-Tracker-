const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

//Function to connect to Database
const connectDbase = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_LINK)

        console.log("MongoDB Connected")
    } catch (error) {
        console.log("Error connecting to Database")
    }
}