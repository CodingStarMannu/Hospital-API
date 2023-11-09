const express = require('express');
const router = express.Router();
const passport = require('passport');

const status= require('../controllers/status')


router.use('/doctor', require('./doctor'));

router.use('/patient', require('./patient'));
router.get('/reports/:status',passport.authenticate('jwt',{session:false}),status.filteredReports);

module.exports = router;