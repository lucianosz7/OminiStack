const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://lucianosz7:omni123@ds227185.mlab.com:27185/omnibackend', 
    {
        useNewUrlParser: true
    }
);

const app = express();
app.use(express.json);
app.use(require('./routes'));

app.listen(3000, () =>{
    console.log(':) Server started on port 3000');
});