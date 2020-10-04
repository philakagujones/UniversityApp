const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const bcrypt = require('bcrypt')

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
   var email = req.body.email
   var password = req.body.password

   con.query("SELECT * FROM users WHERE email = ?", [email], async (error, results, fields) => {
       if (error){
           res.status(400).send("Error occured")
       } else {
           if (results.length > 0){
               const comparison = await bcrypt.compare(password, results[0].password)
               if(comparison){
                   res.json({status: "200 Login Successful"})
               } else {
                   res.json({status: "204 Email and Password don't match"})
               }
           } else {
               res.json({status: "206 Email does not Exist"})
           } 
       }
   })
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