//todo - Declare Variables
const express = require("express");
const app = express()
const PORT = 8000
const mongoose = require("mongoose")

    //*Import functions/routes
const connectDB = require("./config/database")
const homeRoutes = require('./routes/home')

require('dotenv').config({path: './config/.env'})

//todo - Connect to Database
connectDB()


//todo - Set Middleware
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))

//todo - Set Routes
app.use('/',homeRoutes)

//todo - Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
