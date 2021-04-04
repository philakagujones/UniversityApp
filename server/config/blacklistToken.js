const redisClient = require('../config/redis-config');

function blacklistToken(req, res){
    //block of code is the same as jwt-verify,
    const authHeader = req.headers.authorization
    const token = authHeader.split(' ')[3]
    try {
        await redisClient.LPUSH('token', token);
        return res.status(200).json({ status: 200, message: "User has logged out successfully"})
    } catch(error) {
        return res.status(400).json({status: 400, message: error.toString()})
    }
}

module.exports = blacklistToken