const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
  //res.redirect('../frontend/index.html');
});
// Require employee routes
//const employeeRoutes = require('./src/routes/employee.routes')
const userRoutes = require('./src/routes/user.routes')
const medicineRoutes = require('./src/routes/medicine.routes')
const doctorRoutes = require('./src/routes/doctor.routes')
// using as middleware
//app.use('/api/v1/employees', employeeRoutes)
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/users/add',userRoutes);
app.use('/api/v1/medicine',medicineRoutes);
app.use('/api/v1/medicine/add',medicineRoutes);
app.use('/api/v1/doctor',doctorRoutes);
app.use('/api/v1/doctor/add',doctorRoutes);
app.use('/api/v1/appointment',appointmentRoutes);
app.use('/api/v1/appointment/add',appointmentRoutes);
app.use('/api/v1/employee',employeeRoutes);
app.use('/api/v1/emoployee/add',employeeRoutes);
app.use('/api/v1/medical_card',medical_cardRoutes);
app.use('/api/v1/medical_card/add',medical_cardRoutes);
app.use('/api/v1/medicine_store',medicine_storeRoutes);
app.use('/api/v1/medicine_store/add',medicine_storeRoutes);
app.use('/api/v1/patient',patientRoutes);
app.use('/api/v1/patient/add',patientRoutes);
app.use('/api/v1/prescription',prescriptionRoutes);
app.use('/api/v1/prescription/add',prescriptionRoutes);
app.use('/api/v1/treatment',treatmentRoutes);
app.use('/api/v1/treatment/add',treatmentRoutes);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});