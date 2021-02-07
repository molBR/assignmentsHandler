
import {hashPassword} from './util/hashPassword'
import {insertUserRepo, getUserRepo} from './repo'
import {BuisnessError} from '../exception/buisnessError'
export const insertUserService = async (userInfo) =>  {
    const userSave = {
        username: userInfo.username,
        password: await hashPassword(userInfo.password),
        email: userInfo.email
    }
    const user = await getUserRepo(userInfo);
    if(user){
        throw new BuisnessError("User already exists", "email");
    }
    await insertUserRepo(userSave)
    return Promise.resolve(userSave)
    
}