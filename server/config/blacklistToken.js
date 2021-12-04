const redisClient = require('../config/redis-config');

async function blacklistToken(req, res, next){
    //recieve Jwt from client to blacklist token

    //block of code is the same as jwt-verify,
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[3]

    if(token == null) return res.status(401).json({status: "There was no token found"})
    try {
        await redisClient.LPUSH('token', token);
        await redisClient.EXPIREAT('token', parseInt((+new Date)/1000) + 86400)
        console.log("User token has been successfully cached")
    } catch(error) {
        return res.status(400).json({status: error.toString()})
    }
    next()
}

module.exports = blacklistToken