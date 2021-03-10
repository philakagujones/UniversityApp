const jwt = require('jsonwebtoken')

function verifyToken(req, res, next){
    const authHeader = req.headers.authorization

    const token = authHeader.split(' ')[3]
    if (token == null){
        return res.status(402).json({status: "Bad token"})
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