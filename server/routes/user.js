require('dotenv').config()

const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const uuid = require('uuid');
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
    const id = uuid.v4()
     //For jwt token expiration
    var user = {name: email}

   //Insert sql query
    var registerSql = `INSERT IGNORE INTO users (id, email, password, firstname, lastname, phone, address) VALUES (?,?,?,?,?,?,?);`

    con.query('SELECT * FROM users WHERE email = ?', [email], (error, result, fields) => {
        if (error){console.log("Something went wrong: " + err)} 

        if(result.length>0){
            res.status(409).json({status: "User already exists with that email"})
        } else {
            con.query(registerSql, [id, email, password, firstname, lastname, phoneNumber, address], (error, result, fields) => {
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




router.post('/users/login',  async(req, res) => {
   var email = req.body.email
   var password = req.body.password

   con.query("SELECT * FROM users WHERE email = ?", [email], async (error, results, fields) => {
       //For jwt token verification
        var user = {name: `${results[0].email}`, id: `${results[0].id}`}
       if (error){
           res.status(400).send("Error occured")
       } else {
           if (results.length > 0){

               const comparison = await bcrypt.compare(password, results[0].password)
               
               if(comparison){
                   const accessToken = generateAccessToken(user)
        
                   const refreshToken = generateRefreshToken(user)
                   //Put in a try catch statement
                   //still in testing
                   try{
                    var decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
                   } catch(err){
                       res.status(403).json({status: "An Error has occured with the token"})
                   }
                   res.status(200).json({status: "200 Login Successful", accessToken: accessToken, refreshToken: refreshToken, verifyToken: decoded})
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

router.get('/jwt-verify', verifyToken, (req, res, next) => {
    res.status(201).json({status: "Token verified"})
});

//router.delete('/logout', (req, res) => {})
//For logout if token expires throw error and go back to login page

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "15d", algorithm: "HS256"})
}

function generateRefreshToken(user){
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "30d", algorithm: "HS256"})
}

//Code still doesn't work
function verifyToken(req, res, next){
    const authHeader = req.headers['Authorization']

    const bearer = authHeader && authHeader.split(' ')[0]
    if (bearer !="Bearer"){
        return res.status(401).json({status: "Bearer is null"})
    }

    const token = authHeader && authHeader.split(' ')[1]
    if (token == null){
        return res.status(401).json({status: "Bad token"})
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if(err){
            return res.sendStatus(403);
        }else{req.user = payload}
    })
}

module.exports = router;