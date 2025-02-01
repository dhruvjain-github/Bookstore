import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import BookRoute from "./routes/book.route.js"
import UserRoute from "./routes/user.route.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI =process.env.MONGODBURI;

app.use(cors())
app.use(express.json())

try {
    mongoose.connect(URI,{
    })
    console.log("Connected to MongoDB")
} catch (error) {
    console.log("Error: ",error);
}

app.use("/book",BookRoute)
app.use("/user",UserRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
