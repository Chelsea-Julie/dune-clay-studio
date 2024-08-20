import express from 'express';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());

userRouter.get('/', (req, res) => {
    user.fetchUsers(req, res)
})

userRouter.get('/:id', (req, res) => {
    user.fetchOneUser(req, res)
})

userRouter.patch('/:id', (req, res) => {
    user.updated(req, res)
})

userRouter.delete('/:id', (req, res) => {
    user.deleteUser(req, res)
})

userRouter.post('/register', (req, res) => {
    user.registerUser(req, res)
})

userRouter.post('/login', (req, res) => {
    user.loginUser(req, res)
})

export {
    express,
    userRouter
}