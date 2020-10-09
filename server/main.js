require('dotenv').config()

const express = require('express');
const router = require('./routes/user.js')

const app = express()

app.use(express.json())

app.use(router)

app.listen(process.env.APP_PORT, () => {
    console.log("listening")
})