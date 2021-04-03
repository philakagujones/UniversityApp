const jwt = require('jsonwebtoken')
const refreshToken = require('./refreshToken')

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {algorithm: "HS256", expiresIn: '1h'})
}

module.exports = generateAccessToken