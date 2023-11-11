// Importing the Report model
const Report = require('../models/reports');

// Controller function to retrieve filtered reports based on status
module.exports.filteredReports = async function(req,res)
{
    try {
        // Finding all reports with the specified status
        const reports = await Report.find({status:req.params.status})

        // Sending a 200 status with a success message and the filtered reports
        return res.status(200).json({
            message: `List of Reports with status ${req.params.status}`,
            reports: reports
        });
        
    } catch (error) {
        // Handling errors and sending an internal server error status
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}
