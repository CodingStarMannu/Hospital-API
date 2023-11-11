# Hospital API 

Welcome to the Hospital API project! This API is designed for doctors and patients to manage COVID-19 testing, quarantine, and patient well-being.

## Tech Stack

- Node.js
- MongoDB

## Project Setup

Follow these steps to set up the project on your local system:

1. **Clone the Repository:**
   ```
   git clone https://github.com/CodingStarMannu/Hospital-API.git
   cd HOSPITAL-API
   ```

2. **Install Dependencies:**
   ```
   npm install
   ```

3. **Database Configuration:**
   - Make sure you have MongoDB installed and running.
   - Update the MongoDB connection string in `config/mongoose.js`.

4. **JWT Secret Configuration:**
   - Set your JWT secret in `config/passport-jwt-strategy.js`.

5. **Run the Application:**
   ```
   npm start
   ```

   The server will start on `http://localhost:8000`.

## Folder Structure

The project follows a scalable folder structure:

- `config`: Configuration files for MongoDB, Passport, etc.
- `controllers`: Logic for handling routes and business logic.
- `models`: Mongoose models for database schemas.
- `routes`: Express routes for different entities.
- `index.js`: Main entry point for the application.

## Authentication

- Routes requiring authentication:
  - `/doctor/register`
  - `/doctor/login`
  - `/patient/:id/create_report`
  - `/reports/:status`

## API Endpoints

1. **Doctor Registration:**
   - Endpoint: `/doctor/register`
   - Method: `POST`
   - Body: `{ "username": "your_username", "password": "your_password" }`
   - Description: Register a new doctor.

2. **Doctor Login:**
   - Endpoint: `/doctor/login`
   - Method: `POST`
   - Body: `{ "username": "your_username", "password": "your_password" }`
   - Description: Obtain a JWT for authentication.

3. **Patient Registration:**
   - Endpoint: `/patient/register`
   - Method: `POST`
   - Body: `{ "number": "patient_phone_number", "name": "patient_name" }`
   - Description: Register a new patient.

4. **Create Patient Report:**
   - Endpoint: `/patient/:id/create_report`
   - Method: `POST`
   - Authentication: JWT
   - Body: `{ "status": "Negative" }`
   - Description: Create a report for a patient after a checkup.

5. **Get All Reports for a Patient:**
   - Endpoint: `/patient/:id/all_reports`
   - Method: `GET`
   - Authentication: JWT
   - Description: List all reports of a patient, ordered from oldest to latest.

6. **Get Reports by Status:**
   - Endpoint: `/reports/:status`
   - Method: `GET`
   - Authentication: JWT
   - Description: List all reports of all patients filtered by a specific status.

