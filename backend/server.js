const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS middleware
app.use(cors());

// Database configuration
mongoose.connect(process.env.MONGO_URI);


app.use(express.json());

// Routes
const convertRoute = require('./routes/convert');
app.use('/api/convert', convertRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});