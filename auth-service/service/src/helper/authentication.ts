import {Request, Response, NextFunction} from "express";
import * as jwt from "jsonwebtoken";

const JWT_SECRET = 'secret'

export class Authentication {

    public async AuthenticateUser(req: Request, res: Response, next: NextFunction): Promise<any> {
        try {
            // @ts-ignore
            const isVerified = jwt.verify(req.headers.token, JWT_SECRET )
            next()
        } catch(e) {
            res.status(401).json({
                message:"token is invalid"
            })
        }
        
    }

}