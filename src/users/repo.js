
import {getConnection} from "../database"
import {v4 as uuidv4} from 'uuid'
const collection = process.env.COLLECTION_NAME_USERS

export const insertUserRepo = async (userInfo) =>  {
    
    userInfo._id = uuidv4();
    const dbo = await getConnection();
    const pointerCollection = dbo.collection(collection)
    const result = await pointerCollection.insert(userInfo)
    return Promise.resolve(result)
    
}

export const getUserRepo = async (userInfo) => {
    const dbo = await getConnection();
    const pointerCollection = dbo.collection(collection)
    const user = await pointerCollection.findOne({email: userInfo.email})
    return Promise.resolve(user)

}