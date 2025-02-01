import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import BookRoute from './routes/book.route.js';
import UserRoute from './routes/user.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;

// Use import.meta.url to get the current directory name
const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(cors());
app.use(express.json());

try {
  mongoose.connect(URI, {});
  console.log('Connected to MongoDB');
} catch (error) {
  console.log('Error: ', error);
}

// Serve static files for frontend (adjust path to reflect correct location)
app.use(express.static(path.join(__dirname, '..', 'Frontend', 'dist'))); // Updated path

// Your API routes
app.use('/book', BookRoute);
app.use('/user', UserRoute);

// Catch-all route for React Router (ensure it goes after all your API routes)
// This serves the index.html from the dist folder in frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'Frontend', 'dist', 'index.html')); // Updated path
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
