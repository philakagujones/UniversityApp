require('dotenv').config()

const express = require('express');
const register = require('./routes/register.js')
const login = require('./routes/login.js')
const logout = require('./routes/logout.js')
const saveListing = require('./routes/save-listing')
const jwtverify = require('./routes/jwt-verify')

const app = express()

app.use(express.json())

app.use(register)
app.use(login)
app.use(jwtverify)
app.use(logout)

app.listen(process.env.APP_PORT, () => {
    console.log("listening")
})