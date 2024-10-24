import mongoose from "mongoose";

export const connectDB = async ()=> {
    try 
    {
        await mongoose.connect(process.env.DB_URL);
        console.log("DB Connected");
    } 
    catch (error) 
    {
        console.log("Error connecting to DataBase" , error.message);
        process.exit(1);
    }
};