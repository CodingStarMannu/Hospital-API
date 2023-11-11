// Importing the mongoose library for MongoDB schema creation
const mongoose = require('mongoose');

// Defining the schema for the "User" collection
const userSchema = new mongoose.Schema(
    {
        // Unique username for each user, required and must be unique
        username: {
            type: String,
            required: true,
            unique: true
        },
        // Name of the user, required field
        name: {
            type: String,
            required: true
        },
        // Password for the user, required field
        password: {
            type: String,
            required: true
        },
        // Type of user, e.g., 'Doctor' or 'Patient', required field
        type: {
            type: String,
            required: true
        },
        // Array of references to reports associated with the user
        reports: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Reports'
            }
        ]
    },
    {
        // Adding timestamps for automatic tracking of creation and update times
        timestamps: true
    }
);

// Creating the model for the "User" collection based on the defined schema
const User = mongoose.model('User', userSchema);

// Exporting the model to be used in other files
module.exports = User;
