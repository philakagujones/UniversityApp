//TODO for tokens:

//if user logs out before token expires, cache token in redis then delete the token when the time actually expires

const jwt = require('jsonwebtoken')

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {algorithm: "HS256", expiresIn: '30s'})
}

module.exports = generateAccessToken