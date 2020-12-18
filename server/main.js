require('dotenv').config()

const express = require('express');
const user = require('./routes/register.js')

const app = express()

app.use(express.json())

app.use(user)

app.listen(process.env.APP_PORT, () => {
    console.log("listening")
})