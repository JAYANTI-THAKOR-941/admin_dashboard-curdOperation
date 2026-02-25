
import mongoose from "mongoose";

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connection successfully.!!');
    }
    catch(error){
        console.log(`Mongodb connection failed.!!:${error}`);
    }
}

export default connectDB;