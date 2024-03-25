const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

router.post('/signUp', userController.SignUp);
router.post('/signIn', userController.SignIn)
router.get('/UserDetails/:userId', userController.UserDetails)

module.exports = router;