import {Request, Response} from "express";
import * as jwt from "jsonwebtoken";

const JWT_SECRET = 'secret'

export class UserController {
    public UserLogin(req: Request, res: Response):void {

        const authPayload = {
            email: req.body.email,
            id: 'r4nd0mu53r1d5trin6',
            can_view: true,
            can_edit: false,
        }

        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: authPayload
          }, JWT_SECRET);

        res.status(200).send({
            token
        })
    }

    public UpdateUser(req: Request, res: Response):void {
        // console.log(req)
        res.status(200).send({
            user_id: "r4nd0mu53r1d5trin6",
            message: "user has been successfully updated"
        })
    }
}