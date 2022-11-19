const express = require('express')
const router = express.Router()
const treatmentController = require('../controllers/treatment.controller');
// Retrieve all employees
router.get('/', treatmentController.findAll);
// Create a new employee
router.post('/', treatmentController.create);
// Retrieve a single employee with id
//router.get('/:id', medicineController.findById);
// Update a employee with id

module.exports = router