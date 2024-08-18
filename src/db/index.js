import mongoose from "mongoose";

import {DB_NAME} from "../../constants.js"
import dotenv from 'dotenv';


const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect("mongodb+srv://swastickdas95:mongo2024@cluster0.luqsn.mongodb.net/restfulapi")
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
    } catch(error){
        console.log("MongoDB Connection Error",error)
        process.exit(1) //Study this in Node Docs
    }
}

export default connectDB