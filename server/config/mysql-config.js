const {createPool} = require('mysql')

const con = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.MYSQL_DB,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
    connectionLimit: 10
})

module.exports = con