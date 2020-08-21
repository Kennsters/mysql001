const mysql = require('mysql2')

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'K33nnyishere',
//     database: 'todo_db'
// })

// module.exports = db

// or

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'K33nnyishere',
    database: 'todo_db'
})