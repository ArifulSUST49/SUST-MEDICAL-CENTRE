const express = require('express')
const router = express.Router()
const medicine_storeController = require('../controllers/medicine_store.controller');
// Retrieve all employees
router.get('/', medicine_store.findAll);
// Create a new employee
router.post('/', medicine_storeController.create);
// Retrieve a single employee with id
//router.get('/:id', medicineController.findById);
// Update a employee with id
module.exports = router