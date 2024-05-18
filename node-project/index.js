require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DB_URL;
const routes = require('./routes/routes');

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`);
    console.log(`Database URL is ${process.env.DB_URL}`)
})

app.use('/api', routes)