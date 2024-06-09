
const express = require("express")
const dotenv = require("dotenv").config()

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 7000
app.listen(PORT, ()=>{
    console.log('server is running on ${PORT}')
})

app.get("/", (req,res)=>{
    return res.status(200).json({message: "Welcome to my Final project on Youthrive"})
})
