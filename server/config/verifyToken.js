const jwt = require('jsonwebtoken')

function verifyToken(req, res, next){
    const authHeader = req.headers.authorization

    const token = authHeader.split(' ')[3]
    if (token == null){
        return res.status(402).json({status: "Bad token"})
    } 

    //check to see if assigned token is already in cache
    try{
        const checkForToken = await redisClient.lrange('token', 0, 99999999)

        if (checkForToken.indexOf(token) > -1){
            return res.status(400).json({status: "This token has been blacklisted"})
        }
    } catch(error){
        return res.status(501).json({status: error})
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if(err){
            console.log(err)
        
            return res.status(500).json({status: "An error has occured"})
        }
        req.user = payload
        next()
    })
}

module.exports = verifyToken