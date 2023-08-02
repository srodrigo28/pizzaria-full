import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface PayLoad{
    sub: string;
}

export function isAuthenticated( req: Request, res: Response, next: NextFunction) {
    
    const authToken = req.headers.authorization

    if (!authToken) {
        return res.status(401).end()
    }
    // console.log(authToken)
    const [, token] = authToken.split(" ")
    // console.log(token)

    try {
        // validar o teken recebido
        const { sub } = verify(
            token,
            process.env.JWT_SECRET!
        ) as PayLoad

        // console.log(sub)
        return next()

    } catch (err) {
        return res.status(401).end()
    }
}