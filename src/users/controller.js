
import {schemaInsertUser} from './util/schema'
import { ValidationError } from '../exception/validationError'
import {insertUserService} from './service'
import { BuisnessError } from '../exception/buisnessError'
export const userController = (server ) => {

   
    server.post('/insertUser', async(request, reply) => { 
        
        try{
            await schemaInsertUser.validateAsync(request.body)
            const response = await insertUserService(request.body)
            reply
                .code(201)
                .send({
                    status: 201,
                    message: `User ${response.username} successfully inserted`
                })
        }catch (err) {
            if(err instanceof ValidationError){
                reply
                .code(400)
                .header('Content-type', 'application/json; charset=utf-8')
                .send(err)
            }else if (err instanceof BuisnessError) {
                reply
                .code(422)
                .header('Content-type', 'application/json; charset=utf-8')
                .send(err)
            }else{
                reply
                .code(500)
                .header('Content-type', 'application/json; charset=utf-8')
                .send(err)
            }           
        }
        
    })


}