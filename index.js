const express = require('express');
const mongoose = require('mongoose');
const postRoute = require('./routes/posts');


require('dotenv/config');


const app = express();
app.use(express.json());

// Middlewares
app.use('/api/post', postRoute);


app.listen(process.env.APP_PORT, () => {
    console.log(`App started on port ${process.env.APP_PORT}!`);
});



mongoose.set('strictQuery', false);
// mongodb+srv://guest:<password>@cluster0.2nd8r3s.mongodb.net/test
mongoose.connect(process.env.DB_CONNECTION_URL, () => {
    console.log(`Connected to the DB!`);
});
