import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from 'path';

import BookRoute from "./routes/book.route.js";
import UserRoute from "./routes/user.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

app.use(cors());
app.use(express.json());

// MongoDB connection
try {
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// API routes
app.use("/book", BookRoute);
app.use("/user", UserRoute);

// Serve static files from React build
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Catch-all route to send index.html for all non-API requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
