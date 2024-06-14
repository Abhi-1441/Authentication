//authRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const { sendOTP, register, verifyEmail, login, verifyOTP, passwordReset, googleAuth, googleCallback, getUserProfile } = require('../controllers/authController');

router.post('/signup', register);
router.post('/email-verification', verifyEmail);
router.post('/login', login);
router.post('/send-otp', sendOTP);
router.post('/reset-password', passwordReset);
router.get('/google', googleAuth);
router.get('/google/callback', googleCallback);
// Protected route to fetch user info
router.get('/me', passport.authenticate('jwt', { session: false }), getUserProfile);

module.exports = router;
