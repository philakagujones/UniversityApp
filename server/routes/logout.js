const express = require('express')
const router = express.Router()
const blacklistToken = require('../config/blacklistToken')
const verifyToken = require('../config/verifyToken')

router.get('/logout', verifyToken, blacklistToken, (req, res) => {
   console.log("user " + req.user.id + " has logged out")
   res.status(201).json({status: '200 A user has succesfully logged out'})
})

module.exports = router;