require('dotenv').config()
const redis = require('redis');

const client = redis.createClient({
    port: process.env.REDIS_PORT,
    host: process.env.REDIS_HOST,
    auth_pass: process.env.REDIS_PASS
})

module.exports = client