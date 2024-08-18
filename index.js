import express from "express"
import users from "./MOCK_DATA.json" assert { type: "json" };
import fs from "fs"
import mongoose, { mongo, Mongoose } from "mongoose";
import { type } from "os";
import dotenv from 'dotenv';
import {User} from "./src/models/user.model.js"
import connectDB from "./src/db/index.js"
import UserRouter from "./src/routes/user.routes.js"
import logReqRes from "./src/middlewares/index.js";

const app = express()

const PORT= 3000

// Connecting To DB
connectDB()





//Middleware - Plugin
app.use(express.urlencoded({extended:false}))// Middleware

app.use((req,res,next)=>{
    console.log("Hello From Middleware")
    // return res.json({ // This will not let the request finish as it returns a request only
    //     message: "Hello World",
    //     timestamp: new Date()
    // })
    req.myUserName= "Algoplutus"// This req.myUsername will be available for the next lines of code also
    next()// This will call the next middleware or the next route, whichever is next
})

app.use(logReqRes("log.txt"))

app.use((req,res,next)=>{
    console.log(`User Name: ${req.myUserName}`)
    next()
})

//Router
app.use("/api/users",UserRouter)

app.listen(PORT,()=>{
    console.log(`Server Started At ${PORT}`)
})