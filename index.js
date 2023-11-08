const express = require('express');
const app = express();
const port = 8000;


require('./config/mongoose');


const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy.js');


app.use(express.urlencoded({ extended: true }))

app.use(passport.initialize());


app.use('/', require('./routes/index'));

app.listen(port,(error)=>{

    if(error){
        console.log(`Error in creating server. Error is: ${error}`);
    }
    console.log(`Server is up and running on the port: ${port}`);
})