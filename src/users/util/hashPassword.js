import * as bcrypt from 'bcrypt';

export const hashPassword = async (password) =>{

    const SALT_ROUNDS = 10
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hash = bcrypt.hashSync(password, salt);
    return Promise.resolve(hash)
    
}