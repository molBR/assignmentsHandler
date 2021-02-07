
const secret = process.env.TOKEN_SECRET
import * as jwt from 'jsonwebtoken'
export const createToken = async (email) =>  {
    
    console.log
    const token = jwt.sign({email}, secret,{
        expiresIn: "1h"
    })
    return Promise.resolve(token)
}

export const checkToken = async (token) => {

    const data = jwt.verify(token, secret)
    return Promise.resolve(data)
}