const express = require('express')
const router = express.Router()
const userController =   require('../controllers/user');
// Retrieve all employees
router.get('/', userController.findAll);
router.post('/', userController.create);
// Create a new employee
module.exports = router;