const express = require('express');
require('dotenv').config();
const mongooseDb = require('mongoose');

const connectDb = require('./config/connectDb');


const mainRouter = require('./routes/main');


const app = express();
const PORT = 5000;

connectDb();


app.use(express.json());
app.use('/send', mainRouter);


mongooseDb.connection.once('open', ()=> {
    console.log('connection to the data base has been established');
    app.listen(PORT, ()=> {
        console.log(`server is listening on port ${PORT}`)
    });
});




