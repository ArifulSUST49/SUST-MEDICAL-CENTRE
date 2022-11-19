const express = require('express')
const router = express.Router()
const patientController = require('../controllers/patient.controller');
// Retrieve all employees
router.get('/', patientController.findAll);
// Create a new employee
router.post('/', patientController.create);
// Retrieve a single employee with id
//router.get('/:id', medicineController.findById);
// Update a employee with id
//update

module.exports = router;