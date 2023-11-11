// Importing the Express module and creating an instance of the Express application
const express = require('express');
const app = express();

// Setting the port for the server to listen on
const port = 8000;

// Importing the mongoose configuration to connect to the MongoDB database
require('./config/mongoose');

// Importing Passport for authentication and the JWT strategy configuration
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy.js');

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));

// Initializing Passport middleware
app.use(passport.initialize());

// Using the routes defined in the 'index' file
app.use('/', require('./routes/index'));

// Setting up the server to listen on the specified port
app.listen(port, (error) => {
    // Handling errors and logging server status
    if (error) {
        console.log(`Error in creating server. Error is: ${error}`);
    }
    console.log(`Server is up and running on the port: ${port}`);
});
