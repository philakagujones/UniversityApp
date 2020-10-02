const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const passport = require('passport')
const initializePassport = require('./config/passport-config')

initializePassport(passport)

const con = mysql.createPool({
    host: "localhost",
    user: "bevan",
    database: "university_app_local",
    password: "encryptionking$3217",
    port: 3306,
    connectionLimit: 10
})

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
        var registerSql = "INSERT IGNORE INTO users (email, password, firstname, lastname, phone, address) VALUES (?,?,?,?,?,?);"
        con.query(registerSql, [email, password, firstname, lastname, phoneNumber, address], (err, result, fields) => {
            if (err){
                console.log("Failed to insert new user: " + err)
            } else {
                console.log("A new user has registered")
            }
        })
        res.json({status:"OK"})
        res.end()
    }
})

router.post('/users/login', async(req, res) => {
   
})

router.get('/get-users', (req, res) =>{
    con.query("SELECT * FROM users", (err, rows, fields) => {
        if (err){
            console.log("Failed to query for users: " + err)
            res.sendStatus(500)
            return
            throw err
        }
        console.log("Users fetched successfully")
        res.json(rows)
    })
})

module.exports = router;