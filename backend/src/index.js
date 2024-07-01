require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuration de CORS
app.use(cors({
    origin: 'http://localhost:3000', // Remplacez par l'origine de votre frontend
    credentials: true, // Si vous souhaitez envoyer des cookies avec la demande
}));

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Failed to connect to MongoDB', err);
    });

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
