const express = require('express');
const router = express.Router();

router.post('/signup', (req,res)=>{
    res.json({
        message : "Loading signup page",
    });
});

router.post('/login', (req,res)=>{
    res.json({
        message : "Loading login page",
    });
});

module.exports = router;