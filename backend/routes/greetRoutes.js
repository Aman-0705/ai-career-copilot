const express = require("express");
const router = express.Router();

const {greetUser} = require('../controllers/greetController');

router.post('/greet',greetUser);
module.exports = router;