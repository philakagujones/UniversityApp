const jwt = require('jsonwebtoken')

function generateRefreshToken(user){
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {algorithm: "HS256", expiresIn: '1h'})
}

module.exports = generateRefreshToken