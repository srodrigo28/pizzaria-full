import prismaClient from "../../prisma"
import { compare } from "bcryptjs";

interface Authrequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute( { email, password } : Authrequest ) {
        // let result =  console.log(email, password)
        // return {  status: result }

        // Verificar se o email existe
        const userEmail = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!userEmail) {
            throw new Error("Email não encontrado")
        }

        // Verificar se a senha está correta
        const passwordMath = await compare(password, userEmail.password)

        if (!passwordMath) {
            throw new Error("Senha incorreta!")
        }

        return { ok: true }
        // gerar o token JWT 

        
    }
}

export { AuthUserService }