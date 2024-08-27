import { connection as db} from '../config/index.js'
import {compare, hash} from 'bcrypt'

import { createToken } from '../middleware/authenticateUser.js'

class Users {
    static fetchUsers(req, res) {
        try {
            const strQry = `
            SELECT * 
            FROM Users;`
            db.query(strQry, (err, results) => {
                //`Unable to fetch all users`
                if (err) throw new Error (err.message);
                res.json({
                    status: res.statusCode,
                    results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                message: e.message 
            })
        }
        
    }

    static fetchOneUser(req, res) {
        try {
            const strQry = `
            SELECT * 
            FROM Users
            WHERE userID = ${req.params.id};`
            db.query(strQry, (err, results) => {
                if (err) throw new Error (`Unable to fetch this users`);
                res.json({
                    status: res.statusCode,
                    results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                message: e.message 
            })
        }
    }
-


    static async registerUser(req, res){
        try {
            let data = req.body
            data.userPass = await hash(data.userPass,12)
                // payload
                let user = {
                    emailAdd: data.emailAdd,
                    pwd: data.userPass
                }
                let strQry = `
                INSERT INTO Users 
                 SET ?; 
                `
                db.query(strQry, [data], (err) => {
                    if (err) {
                        res.json({
                            status:res.statusCode,
                            msg: 'This email address already exists'
                        })
                    }   else {
                        const token = createToken(user)
                        res.json({
                            token,
                            msg:'You are now registered'
                        })
                    }
                })
            
        } catch (err) {
            console.log(err);
        }
    }

    static async updated(req,res) {
        try {
            let data = req.body
            if (data.pwd) {
                data.pwd = await hash(data.pwd, 12)
            }
            const strQry = `
            UPDATE Users
            SET ?
            WHERE userID = ${req.params.id}
            `
            db.query(strQry, [data], (err) => {
    
                if (err) throw new Error (err);
                res.json({
                    status: res.statusCode,
                    msg: 'User updated successfully'
                })
            })
        } catch (e) {
            res.json({
                staus:400,
                msg:e.message
            })
        }
    }

    static deleteUser(req,res) {
        try {
            const strQry = `
            DELETE FROM Users WHERE userID = ${req.params.id};
            `
            db.query(strQry, (err) => {
                if (err) throw new Error('Error deleting')
                    res.json({
                status: res.statusCode,
                    msg: 'User deleted successfully'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }

    static loginUser(req,res) {
        try {
            const { emailAdd, userPass} = req.body
            const strQry = `
            SELECT *
            FROM Users 
            WHERE emailAdd = '${emailAdd}'
            `
            db.query(strQry, async (err, result) => {
                if (err) throw new Error('To login, please try again')
                if (!result?.length) {
                    res.json(
                        {
                            status: 401,
                            msg: 'Invalid email'
                        }
                    )
                } else {
                    const isValidPass = await compare
                    (userPass, result[0].userPass)
                    if (isValidPass) {
                        const token = createToken({
                            emailAdd,
                            userPass
                        })
                        res.json({
                            status: res.statusCode,
                            token,
                            result: result[0]
                        })
                    } else {
                        res.json(
                            {
                                status: 401,
                                msg: 'Invalid password'
                            }
                        )
                    }
                } 
            })
        } catch (e) {
            
        }
    }

    


}

export{
    Users
}