const express = require('express')
const router = express.Router()
const medical_cardController = require('../controllers/medical_card.controller');
// Retrieve all employees
router.get('/', medical_cardController.findAll);
// Create a new employee
router.post('/', medical_cardController.create);
// Retrieve a single employee with id
//router.get('/:id', medicineController.findById);
// Update a employee with id
module.exports = router