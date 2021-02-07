import fastify from 'fastify'
import 'dotenv/config'
import {wrapperController} from './router'
import {createDatabaseConfig} from './database'
const start = async () => {
    
    const server = fastify()
    createDatabaseConfig()
    wrapperController(server);
    server.listen(8080, async (err,address) => {
        if(err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`SERVER LISTENING AT ${address}`);
        
    });
}

start()

