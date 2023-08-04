const express = require('express');

const mainRouter = require('./routes/main');


const app = express();
const PORT = 5000;


app.use(express.json());
app.use('/send', mainRouter);


app.listen(PORT, ()=> {
    console.log(`server is listening on port ${PORT}`)
});



