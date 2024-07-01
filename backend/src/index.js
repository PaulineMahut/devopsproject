require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use (cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Failed to connect to MongoDB', err);
    });

// app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
