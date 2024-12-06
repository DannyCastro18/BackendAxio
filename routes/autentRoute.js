const express = require('express')
const { signup, login, verifyEmail, forgotpassword, resetpassword } = require('../controllers/authController')
const router = express.Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/verify-email/:token', verifyEmail)
router.post('/forgotpassword', forgotpassword)
router.post('/resetpassword/:token', resetpassword)

module.exports = router