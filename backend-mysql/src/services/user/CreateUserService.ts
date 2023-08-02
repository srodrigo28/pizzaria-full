import prismaClient from '../../prisma'

interface UserRequest{
    name: string;
    email: string;
    password: string;
}
class CreateUserService{
    async execute({ name, email, password }: UserRequest) {
        // console.log(name)

        //Verifica se o email está preenchido ou valido
        if (!email) {
            throw new Error('Email é obrigatório')
        }

        //Verificar se já existe no banco
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if (userAlreadyExists) {
            throw new Error('Esse email já está cadastrado')
        }
        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: password
            },
            select: {
                id: true,
                name: true,
                email: true,
            }
        })
        return { user}
    }
}

export { CreateUserService }