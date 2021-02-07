import {MongoClient} from 'mongodb'

const url = process.env.DATABASE_URL
const DATABASE_NAME = process.env.DATABASE_NAME
const COLLECTION_NAME = process.env.COLLECTION_NAME_USERS
export const createDatabaseConfig = async ()=>{

    const client = await MongoClient.connect(url)
    const dbo = client.db(DATABASE_NAME);
    const collections = await dbo.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    if(collectionNames.includes(COLLECTION_NAME)){
        console.log("Collection already exists")
    
    }else {
        await dbo.createCollection(COLLECTION_NAME)
        console.log("Collection created")
    }
    return Promise.resolve(client);
}

export const getConnection = async () => {
    const client = await MongoClient.connect(url)
    const dbo = client.db(DATABASE_NAME);
    return Promise.resolve(dbo)
}