const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://lucianosz7:omni123@ds227185.mlab.com:27185/omnibackend', 
    {
        useNewUrlParser: true
    }
);

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello World');
});

app.listen(3000, () =>{
    console.log(':) Server started on port 3000');
});