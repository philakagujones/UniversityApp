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

    con.query("INSERT INTO users (email, password) VALUES (?,?);", [email, password], (err, result, fields) => {
        if (err){
            console.log("Failed to insert new user: " + err)
        } else {
            console.log("A new user has registered")
        }
    })

    

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