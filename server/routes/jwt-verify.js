const express = require('express')
const router = express.Router()
const verifyToken = require('../config/verifyToken')

router.get('/jwt-verify', verifyToken, (req, res) => {
    console.log("user " + req.user.id + " has logged in") 
    res.status(201).json({status: "Token verified"})
});

module.exports = router