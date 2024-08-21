import express from 'express';
import bodyParser from 'body-parser';

import { Users } from '../model/User.js';

const userRouter = express.Router();
userRouter.use(bodyParser.json());

// To get all the users
userRouter.get('/', (req, res) => {
    Users.fetchUsers(req, res)
})

// to register a new user
userRouter.post('/register', (req, res) => {
    Users.registerUser(req, res)
})

// To login as a user
userRouter.post('/login', (req, res) => {
    Users.loginUser(req, res)
})

// to get one user
userRouter.get('/:id', (req, res) => {
    Users.fetchOneUser(req, res)
})

// to update a user
userRouter.patch('/:id', (req, res) => {
    Users.updated(req, res)
})

// to delete a user
userRouter.delete('/:id', (req, res) => {
    Users.deleteUser(req, res)
})



export {
    
    userRouter
}