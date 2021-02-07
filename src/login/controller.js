
import {loginSchema, validateSchema} from './util/schema.js'
import { ValidationError } from '../exception/validationError'
import {loginService, logoutService, validateService} from './service'
import { BuisnessError } from '../exception/buisnessError'

export const loginController = (server ) => {

    
    server.post('/login', async(request, reply) => { 
        try{
            await loginSchema.validateAsync(request.body)
            const response = await loginService(request.body)
            reply
                .code(200)
                .send({status: 200,
                    token: response})
        }catch (err) {
            console.log(err)
            if(err instanceof ValidationError){
                reply
                .code(400)
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

    server.post('/logout', async(request, reply) => { 
        try{
            const token = request.headers['x-connection-token']
            await validateSchema.validateAsync(request.body)
            const response = await logoutService(request.body, token)
            reply
                .code(200)
                .send({status: 200,
                    msg: 'Logout successfull'})
        }catch (err) {
            console.log(err)
            if(err instanceof ValidationError){
                reply
                .code(400)
                .header('Content-type', 'application/json; charset=utf-8')
                .send(err)
            }else if (err instanceof BuisnessError){
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

    server.post('/validateToken', async(request, reply) => {
        try{
            const token = request.headers['x-connection-token']
            await validateSchema.validateAsync(request.body)
            const response = await validateService(request.body, token)
            reply
                .code(200)
                .send({status: 200,
                    msg: 'Token validated'})
            
        }catch(err) {
            console.log(err)
            if(err instanceof ValidationError){
                reply
                .code(400)
                .header('Content-type', 'application/json; charset=utf-8')
                .send(err)
            }else if (err instanceof BuisnessError){
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