const express = require('express');
const router = express.Router();
const generateAccessToken = require('../config/accessToken');
const generateRefreshToken = require('../config/refreshToken');
const con = require('../config/mysql-config.js');

//This route is used when the access token expires
//Todo: if accesstoken expired and returns error use this route to generate a new access token and refresh token
router.post('/token', verifyRefreshToken, (req, res) => {
    const user = req.user
    
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)
    res.json({message: "token success", data: {accessToken, refreshToken}})
})

module.exports = router