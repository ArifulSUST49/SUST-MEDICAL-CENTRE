const express = require('express')
const router = express.Router()
const prescriptionController = require('../controllers/prescription.controller');
// Retrieve all employees
router.get('/', prescriptionController.findAll);
// Create a new employee
router.post('/', prescriptionController.create);
// Retrieve a single employee with id
//router.get('/:id', medicineController.findById);
// Update a employee with id

module.exports = router