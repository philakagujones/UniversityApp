require('dotenv').config()

const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const con = require('../config/mysql-config.js')

const in_prod = process.env.NODE_ENV === 'production'

router.use(session({
    name: process.env.SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESS_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: true,
        secure: in_prod
    }
}))


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


    if(email != "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" && password == null || password.length < 9 ){
        console.log("credentials not valid")
    } else {
        var registerSql = "INSERT INTO users (email, password, firstname, lastname, phone, address) VALUES (?,?,?,?,?,?);"
        con.query(registerSql, [email, password, firstname, lastname, phoneNumber, address], (error, result, fields) => {
            if (error){
                console.log("Failed to insert new user: " + err)
            } else {
                console.log("A new user has registered")
                req.session.userId = req.params.id
            }
        })
        res.json({status:"OK"})
        res.end()
    }
})

router.post('/users/login', async(req, res) => {
   var email = req.body.email
   var password = req.body.password

   con.query("SELECT * FROM users WHERE email = ?", [email], async (error, results, fields) => {
       if (error){
           res.status(400).send("Error occured")
       } else {
           if (results.length > 0){

               const comparison = await bcrypt.compare(password, results[0].password)
               
               if(comparison){

                   res.status(200).json({status: "200 Login Successful"})
                   console.log(req.sessionId)
    
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

router.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err){
            console.log("Couldn't logout")
        }
        res.clearCookie(process.env.SESS_NAME)
    })
})


module.exports = router;