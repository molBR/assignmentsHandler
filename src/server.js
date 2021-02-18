import fastify from 'fastify'
import 'dotenv/config'
import {wrapperController} from './router'
import {createDatabaseConfig} from './database'
const start = async () => {
    
    const server = fastify()
    createDatabaseConfig()
    wrapperController(server);
    server.listen(8081, async (err,address) => {
        if(err) {
            console.error(err);
            process.exit(1);
        }
        console.log("eu apareco??")
        console.log(`SERVER LISTENING AT ${address}`);
        
    });
}

start()

