
import {logoutRepo, validateRepo} from './repo'
import {getUserRepo} from '../users/repo'
import { NotFoundError } from '../exception/notFoundError'
import {createToken, checkToken} from './util/token'
import { BuisnessError } from '../exception/buisnessError'
export const loginService = async (loginInfo) =>  {
    const user = await getUserRepo(loginInfo)
    if(!user){
        throw new NotFoundError("User not found", "email")
    }
    const token = await createToken(loginInfo.email);
    return Promise.resolve(token)
}

export const logoutService = async (logoutInfo, token) => {
    
    const validatedToken = await checkToken(token);
    if(validatedToken.email != logoutInfo.email){
        throw new BuisnessError("Inconsistency token", "token")
    }
    const response = await logoutRepo(token)
    return Promise.resolve(token)
    
}

export const validateService = async (validateInfo, tokenInfo) =>{
    const validatedToken = await checkToken(tokenInfo);
    if(validatedToken.email != validateInfo.email){
        throw new BuisnessError("Inconsistency token", "token")
    }
    const token = await validateRepo(tokenInfo)
    if(token){
        throw new BuisnessError("Token not available", "token")
    }
    return Promise.resolve()
}