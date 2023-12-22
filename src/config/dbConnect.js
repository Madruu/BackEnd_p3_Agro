import mongoose from "mongoose";
import dotenv from "dotenv";
mongoose.set('strictQuery', false);
dotenv.config();
mongoose.connect(process.env.MONGO_URL);

let db = mongoose.connection;
export default db;