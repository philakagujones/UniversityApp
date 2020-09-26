const express = require('express');
const router = require('./routes/user.js')
const app = express()
const mysql = require('mysql')

app.use(express.json())

app.use(router)

app.listen(8899, () => {
    console.log("listening")
})