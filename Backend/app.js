import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import BookRoute from './routes/book.route.js';
import UserRoute from './routes/user.route.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const URI = process.env.MONGODBURI;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors());
app.use(express.json());

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'Frontend/dist')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/Frontend/dist/index.html'));
}
);

try {
  mongoose.connect(URI, {});
  console.log('Connected to MongoDB');
} catch (error) {
  console.log('Error: ', error);
}

// Your API routes
app.use('/book', BookRoute);
app.use('/user', UserRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
