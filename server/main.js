const express = require('express');
const mysql = require('mysql')
const router = express.Router();

const app = express()

app.use(express.json())

 const con = mysql.createPool({
     host: "localhost",
     user: "bevan",
     database: "university_app_local",
     password: "encryptionking$3217",
     port: 3306,
     connectionLimit: 10
 })

app.post('/register', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const phoneNumber = req.body.phone
    const address = req.body.address

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
})

app.put('/register', (req, res) => {
    const id = req.body.id
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const phoneNumber = req.body.phone
    const address = req.body.address

    var updateRegister = "UPDATE users SET firstname = ?, lastname = ?, phone = ?, address = ? WHERE email = ?"
    con.query(updateRegister, [firstname, lastname, phoneNumber, address, id], (err, result, fields) => {
        if (err){
            console.log("Failed to update user: "  + err)
        } else {
            console.log("Success! user information updated")
        }
    })
    res.json({status:"OK"})
    res.end()
})

app.get('/get-users', (req, res) =>{
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

app.listen(8899, () => {
    console.log("listening")
})