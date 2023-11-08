const express = require('express');
const router = express.Router();
const passport = require('passport');

router.use('/doctor', require('./doctor'));


module.exports = router;