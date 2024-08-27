import express from 'express'
import path from 'path'
import cors from 'cors'
import { userRouter } from './controller/userController.js'
import { productRouter } from './controller/prodController.js'

import { errorHandling } from './middleware/errorHandlier.js'

import bodyParser from 'body-parser'
import { log } from 'console'

// Create an express app
const app = express()
const port = +process.env.PORT || 4000

// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
})

app.use(cors())

app.use('/users', userRouter)
app.use('/products', productRouter)

app.use( express.static('./static'),
    express.json(),
    express.urlencoded({
    extended: true
    })
    
)


app.use(bodyParser.json());


// ENDPOINT
app.get('^/$|/eShop', (req, res) => {
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})


app.use(errorHandling)

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})