const express = require('express')
const router = express.Router()
const doctorController = require('../controllers/doctor.controller');
// Retrieve all employees
router.get('/', doctorController.findAll);
// Create a new employee
router.post('/', doctorController.create);
// Retrieve a single employee with id
//router.get('/:id', medicineController.findById);
// Update a employee with id
module.exports = router;