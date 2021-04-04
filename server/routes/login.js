require('dotenv').config()

const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const generateAccessToken = require('../config/accessToken.js')
const generateRefreshToken = require('../config/refreshToken')
const con = require('../config/mysql-config.js')


router.post('/login',  async(req, res) => {
    var email = req.body.email
    var password = req.body.password
 
    con.query("SELECT * FROM users WHERE email = ?", [email], async (error, results, fields) => {
        //For jwt token verification
         var user = {name: `${results[0].email}`, id: `${results[0].id}`}

        if (error){
            res.status(400).send("Error occured")
        } else {
            //check to see if user inputed data is in database
            if (results.length > 0){
                
                //compare the user inputed password with hashed password in database
                const comparison = await bcrypt.compare(password, results[0].password)
                
                //if comparisson is true assign access token
                //TODO: generate refreshToken only after accessToken expires, and do it infinately till user logs out
                if(comparison){
                    const accessToken = generateAccessToken(user)
         
                    const refreshToken = generateRefreshToken(user)
                    
                    res.status(200).json({status: "200 Login Successful", accessToken: accessToken, refreshToken: refreshToken})
                } else {
                    res.status(204).json({status: "204 Email and Password don't match"})
                    res.end()
                }
 
            } else {
                res.status(404).json({status: "404 Email does not Exist"})
            } 
        }
    })
 })

 module.exports = router;