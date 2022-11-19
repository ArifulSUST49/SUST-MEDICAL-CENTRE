const express = require('express')
const router = express.Router()
const appointmentController = require('../controllers/appointment.controller');
// Retrieve all employees
router.get('/', appointmentController.findAll);
// Create a new employee
router.post('/', appointmentController.create);
// Retrieve a single employee with id
//router.get('/:id', medicineController.findById);
// Update a employee with id
module.exports = router; 