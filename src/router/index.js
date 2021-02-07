
import {userController} from '../users/controller'
import {loginController} from '../login/controller'
export const wrapperController = (server) => {


    server.get('/', async(request, reply) => { //healthcheck

        return 'OK'
    })

    userController(server);
    loginController(server);
}