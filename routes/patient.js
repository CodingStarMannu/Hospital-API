// Importing the Express module and creating an instance of the Express Router
const express = require('express');
const router = express.Router();

// Importing the patientController for handling patient-related routes
const patient = require('../controllers/patientController');

// Importing Passport for JWT authentication
const passport = require('passport');

// Route for handling patient registration (POST request)
// Uses Passport for JWT authentication, and calls the register function from the patient controller
router.post('/register', passport.authenticate('jwt', { session: false }), patient.register);

// Route for handling report creation for a specific patient (POST request)
// Uses Passport for JWT authentication, and calls the createReport function from the patient controller
router.post('/:id/create_report', passport.authenticate('jwt', { session: false }), patient.createReport);

// Route for retrieving all reports for a specific patient (GET request)
// Uses Passport for JWT authentication, and calls the patientReports function from the patient controller
router.get('/:id/all_reports', passport.authenticate('jwt', { session: false }), patient.patientReports);

// Exporting the router for use in other files
module.exports = router;
