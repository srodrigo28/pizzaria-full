import prismaClient from "../../prisma"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"

interface Authrequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute( { email, password } : Authrequest ) {
        // let result =  console.log(email, password)
        // return {  status: result }

        // Verificar se o email existe
        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("Email não encontrado")
        }

        // Verificar se a senha está correta
        const passwordMath = await compare(password, user.password)

        if (!passwordMath) {
            throw new Error("Senha incorreta!")
        }

        // return { ok: true }
        // gerar o token JWT

        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET!, // expreimenta tirar o ponto de exclamação!
            {
                subject: user.id,
                expiresIn: '30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}

export { AuthUserService }