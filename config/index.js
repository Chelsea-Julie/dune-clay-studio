import "dotenv/config"
import { createPool } from 'mysql2'
import { log as l } from 'console'

const connection = createPool({
    host: process.env.HOST_DB,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    multipleStatements: true,
    connectionLimit: 30,
})


connection.on('connection', (pool) => {
    if (!pool) throw new Error('Couldn\'t connect to the database, please try again later')
    l(`Connected successfully as ${pool.threadId}`)
})

connection.on('error', (err) =>{
    if (err){
        l(`Error connecting to database: ${err.stack}`)
        process.exit()  // Exit the application with an error code 1 if connection fails.
    }
})

export {
    connection
}