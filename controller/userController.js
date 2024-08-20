import express from 'express';
import bodyParser from 'body-parser';

import { Users } from '../model/User.js';

const userRouter = express.Router();
userRouter.use(bodyParser.json());

userRouter.get('/', (req, res) => {
    Users.fetchOneUser(req, res)
})

userRouter.get('/:id', (req, res) => {
    Users.fetchOneUser(req, res)
})

userRouter.patch('/:id', (req, res) => {
    Users.updated(req, res)
})

userRouter.delete('/:id', (req, res) => {
    Users.deleteUser(req, res)
})

userRouter.post('/register', (req, res) => {
    Users.registerUser(req, res)
})

userRouter.post('/login', (req, res) => {
    Users.loginUser(req, res)
})

export {
    
    userRouter
}