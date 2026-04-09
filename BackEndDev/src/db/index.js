import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        if(!process.env.MONGODB_URI){
            throw new Error("MongoDB URI not defined")
        }
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB successfully connected !! DB Host: ${connection.connection.host}`);
    } catch (error) {
        console.log("MongoDB error: ", error.message);
        throw new Error(error.message);
        //process.exit(1);
    }
}

export default connectDB