const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/auth');
const {register,login,getMe} = require('../controllers/userController')


router.post('/create', register);
router.post('/login', login);
router.get('/profile',protect, getMe);

module.exports = router;