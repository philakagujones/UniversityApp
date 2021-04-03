require('dotenv').config()

const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const uuid = require('uuid');
const con = require('../config/mysql-config.js')
const generateAccessToken = require('../config/accessToken.js')
const generateRefreshToken = require('../config/refreshToken')


router.post('/register', async (req, res) => {
    try {
        var hashedPassword = await bcrypt.hash(req.body.password, 10)
    } catch{
        res.status(500).json({status: "Password failed to hash"})
    }

    const email = req.body.email
    const password = hashedPassword
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const phoneNumber = req.body.phone
    const address = req.body.address
    const id = uuid.v4()

   //Insert sql query
    var registerSql = `INSERT IGNORE INTO users (id, email, password, firstname, lastname, phone, address) VALUES (?,?,?,?,?,?,?);`

    con.query('SELECT * FROM users WHERE email = ?', [email], (error, results, fields) => {
        
        if (error){console.log("Something went wrong: " + err)} 

        if(results.length>0){
            res.status(409).json({status: "User already exists with that email"})
        } else {
            con.query(registerSql, [id, email, password, firstname, lastname, phoneNumber, address], (error, results, fields) => {

                var user = {name: email, id: id}

                if (error){
                    console.log("Failed to insert new user: " + error)
                } else if (email != "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" && password == null || password.length < 9){
    
                    res.status(403).json({status: "invalid credentials- Forbidden "})
                    
                } else {
                    const accessToken = generateAccessToken(user)
                    const refreshToken = generateRefreshToken(user)
                    res.json({status:"OK", accessToken: accessToken, refreshToken: refreshToken})
                    console.log("A new user has registered")
                }
            })
        }
    }) 
})


module.exports = router;