// Importing necessary modules and files
const Report = require('../models/reports'); // Importing the Report model
const User = require('../models/user'); // Importing the User model

// Controller function to handle patient registration
module.exports.register = async function(req,res){
    try{
        // Checking if a user with the provided number (username?) already exists
        let user = await User.findOne({username:req.body.number});

        if (user){
            // If user already exists, return a 209 status with a message and user data
            return res.status(209).json({
                message:'User already registered!',
                data:{
                    user:user
                }
            });
        }

        // Creating a new user (patient) with the provided details
        user = await User.create({
            username: req.body.number,
            name:req.body.name,
            password:'12345', // Setting a default password for the new user
            type:'Patient'
        });

        // Sending a 209 status with a success message and user data
        res.status(209).json({
            message: 'Patient registered successfully!',
            data:user
        });

    }catch(error){
        // Handling errors and sending an internal server error status
        console.log(error);
        return res.status(500).json({
            message:'Internal Server Error'
        });
    }
}

// Controller function to handle report creation
module.exports.createReport = async function(req,res){
    try{
        // Finding the user (patient) by ID
        const user = await User.findById(req.params.id);  

        if(!user){
            // If the patient does not exist, return a 422 status with an error message
            return res.status(422).json({
                message:'Patient Does not Exists!'
            });
        }

        // Creating a new report with the provided details
        let report = await Report.create({
            createdByDoctor:req.user.id,
            patient: req.params.id,
            status:req.body.status,
            date: new Date()
        });

        // Adding the created report to the user's reports array
        user.reports.push(report);

        // Sending a 201 status with a success message and report data
        return res.status(201).json({
            message: 'Report created successfully',
            data: report
        });

    }catch(error){
        // Handling errors and sending an internal server error status
        console.log(error);
        return res.status(500).json({
            message:'Internal Server Error'
        });
    }
}

// Controller function to retrieve reports for a specific patient
module.exports.patientReports = async function(req,res){
    try{
        // Finding all reports for the specified patient, populating the createdByDoctor field, and sorting by date
        const reports = await Report.find({patient:req.params.id}).populate('createdByDoctor').sort('date');

        // Mapping the reports to a new format for better presentation
        const reportData = reports.map(report =>{
            const originalDate = report.date;
            const dateObj = new Date(originalDate);

            // Formatting the date for better readability
            const formattedDate = dateObj.toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
                });

            // Returning formatted report data
            return {
                createdByDoctor: report.createdByDoctor.name,
                status: report.status,
                date: formattedDate
            };
        });

        // Sending a 200 status with a success message and the formatted report data
        return res.status(200).json({
            message: `List of Reports of User with id -  ${req.params.id}`,
            reports:reportData
        });

    }catch(error){
        // Handling errors and sending an internal server error status
        console.log(error);
        return res.status(500).json({
            message:'Internal Server Error'
        });
    }
}
