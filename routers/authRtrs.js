const router = require('express').Router();
const authController = require('../controllers/authCntrl.js');
router.post('/signup',authController.signupController);
router.post('/login',authController.logInController);
router.get('/refresh',authController.refreshAccessToken)

module.exports = router
