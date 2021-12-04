const jwt = require('jsonwebtoken')

function generateRefreshToken(user){
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {algorithm: "HS256", expiresIn: '60d'})
}

module.exports = generateRefreshToken