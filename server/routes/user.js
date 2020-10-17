require('dotenv').config()

const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const con = require('../config/mysql-config.js')


router.post('/users', async (req, res) => {
    try {
        var hashedPassword = await bcrypt.hash(req.body.password, 10)
    } catch{
        res.status(500).json
    }

    const email = req.body.email
    const password = hashedPassword
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const phoneNumber = req.body.phone
    const address = req.body.address

     //For jwt token expiration
   var user = {name: email}

   //Insert sql query
    var registerSql = "INSERT IGNORE INTO users (email, password, firstname, lastname, phone, address) VALUES (?,?,?,?,?,?);"

    con.query('SELECT * FROM users WHERE email = ?', [email], (error, result, fields) => {
        if (error){console.log("Something went wrong: " + err)} 

        if(result.length>0){
            res.status(409).json({status: "User already exists with that email"})
        } else {
            con.query(registerSql, [email, password, firstname, lastname, phoneNumber, address], (error, result, fields) => {
                if (error){
                    console.log("Failed to insert new user: " + error)
                } else if (email != "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" && password == null || password.length < 9){
    
                    res.status(403).json({status: "invalid credentials- Forbidden "})
                    
                } else {
                    const accessToken = generateAccessToken(user)
                    res.json({status:"OK", accessToken: accessToken})
                    console.log("A new user has registered")
                }
            })
        }
    })
})




router.post('/users/login', async(req, res) => {
   var email = req.body.email
   var password = req.body.password

   //For jwt token expiration
   var user = {name: email}

   con.query("SELECT * FROM users WHERE email = ?", [email], async (error, results, fields) => {
       if (error){
           res.status(400).send("Error occured")
       } else {
           if (results.length > 0){

               const comparison = await bcrypt.compare(password, results[0].password)
               
               if(comparison){
                   const accessToken = generateAccessToken(user)
                   res.status(200).json({status: "200 Login Successful", accessToken: accessToken})
               } else {
                   res.status(204).json({status: "204 Email and Password don't match"})
                   res.end()
               }

           } else {
               res.status(206).json({status: "206 Email does not Exist"})
           } 
       }
   })
})

//router.post('/logout', (req, res) => {})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '5s'})
}

module.exports = router;