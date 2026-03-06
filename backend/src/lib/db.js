import mongoose from "mongoose";
import  { ENV } from "./env.js"

export const connectDB = async () =>{
    
    mongoose.Promise = global.Promise
    mongoose.connect(ENV.DB_URL)
    .then(mongoose=>console.log(`MongoDB connection : ${mongoose.connection.host}`))
    .catch(err=>console.log(err))


};