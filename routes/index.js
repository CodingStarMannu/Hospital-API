// Importing the Express module and creating an instance of the Express Router
const express = require('express');
const router = express.Router();

// Importing the Passport module for authentication
const passport = require('passport');

// Importing the status controller for handling status-related routes
const status = require('../controllers/status');

// Using the doctor routes defined in the 'doctor' file
router.use('/doctor', require('./doctor'));

// Using the patient routes defined in the 'patient' file
router.use('/patient', require('./patient'));

// Route for retrieving reports with a specific status (GET request)
// Uses Passport for JWT authentication, and calls the filteredReports function from the status controller
router.get('/reports/:status', passport.authenticate('jwt', { session: false }), status.filteredReports);

// Exporting the router for use in other files
module.exports = router;
