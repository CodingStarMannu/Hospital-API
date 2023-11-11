// Importing the Express module
const express = require('express');

// Creating an instance of the Express Router
const router = express.Router();

// Importing the doctorController for handling doctor-related routes
const doctor = require('../controllers/doctorController');

// Route for handling doctor registration (POST request)
router.post('/register', doctor.create);

// Route for handling doctor login (POST request)
router.post('/login', doctor.createSession);

// Exporting the router for use in other files
module.exports = router;
