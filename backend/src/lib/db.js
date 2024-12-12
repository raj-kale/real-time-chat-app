import mongoose from "mongoose";
import {config} from "dotenv"
export const connectDB = async () => {
   try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
   } catch (error) {
    console.log("MongoDB Connection Error: ", error);
    
   }
   config();
};