import {Request, Response} from "express";
import{ UserController } from '../controllers/userController'
import { Authentication } from '../helper/authentication'



export class Routes {

    public userController: UserController = new UserController()
    public authentication: Authentication = new Authentication()

    public routes(app): void {          
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        
        app.route('/user/login!')
        .post(this.userController.UserLogin) 

        app.route('/user/:userId')
        .patch(this.authentication.AuthenticateUser, this.userController.UpdateUser)
    }
}