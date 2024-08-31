import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { userRouter } from './controller/userController.js';
import { productRouter } from './controller/prodController.js';
import cors from 'cors';


const app = express();
const port = +process.env.PORT || 6001;
// middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next()
})

// app.use(cors())

// app.use(cors({ origin: 'http://localhost:8080'}));

app.use('/users', userRouter)
app.use('/products', productRouter)
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({extended: true}),
)
// endpoints
app.get('^/$|/dune', (req, res) =>{
    res.status(200).sendFile(path.resolve('./static/html/index.html'));
})
app.listen(port , () => {
    console.log('Server is running on ' + port)
})






