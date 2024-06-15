
const express = require("express")
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const  cors = require("cors")
const connectDbase = require("./Dbase/dbasefile")
const routes = require("./routes/userRoutes")
const app = express()
app.use(express.json())

app.use(cors())

const PORT = process.env.PORT || 7000

connectDbase()

app.listen(PORT, ()=>{
    console.log('server is running on ${PORT}')
})




app.get("/", (req,res)=>{
    return res.status(200).json({message: "Welcome to my Final project on Youthrive"})
})

app.use("/api", routes)

app.use((req, res)=>{
    res.status(404).json({
        message: "Sorry this endpoint does not exist."
    })
})