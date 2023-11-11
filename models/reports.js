// Importing the mongoose library for MongoDB schema creation
const mongoose = require('mongoose');

// Defining the schema for the "Reports" collection
const reportSchema = new mongoose.Schema(
    {
        // Reference to the doctor who created the report
        createdByDoctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        // Reference to the patient for whom the report is created
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        // Status of the report with predefined options using enum
        status: {
            type: String,
            required: true,
            enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine', 'Positive-Admit']
        },
        // Date when the report was created
        date: {
            type: Date,
            required: true
        }
    },
    {
        // Adding timestamps for automatic tracking of creation and update times
        timestamps: true
    }
);

// Creating the model for the "Reports" collection based on the defined schema
const Reports = mongoose.model('Reports', reportSchema);

// Exporting the model to be used in other files
module.exports = Reports;
