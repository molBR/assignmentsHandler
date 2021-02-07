import {getConnection} from "../database"
import {v4 as uuidv4} from 'uuid'
const collection = process.env.COLLECTION_NAME_TOKEN

export const logoutRepo = async (token) =>  {

    const dbo = await getConnection();
    const pointerCollection = dbo.collection(collection)
    const repoObject = {
        _id: uuidv4(),
        token: token
    }
    const result = await pointerCollection.insert(repoObject)
    return Promise.resolve(result)

}

export const validateRepo = async(tokenInfo) => {

    const dbo = await getConnection();
    const pointerCollection = dbo.collection(collection)
    const token = await pointerCollection.findOne({token: tokenInfo})
    return Promise.resolve(token)
}