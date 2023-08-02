import prismaClient from "../../prisma";

interface CategoryRequest{
    name: string;
}

class CreateCategoryService{
    async execute( { name } : CategoryRequest ) {
        
        //Verificar está em branco
        if (name === '') {
            throw new Error('Precida passar um nome')
        }

        //Verificar se já existe no banco
        const cateogriaExiste = await prismaClient.category.findFirst({
            where: {
                name: name
            }
        })
        if (cateogriaExiste) {
            throw new Error('Essa categoria está cadastrado')
        }

        const category = await prismaClient.category.create({
            data: {
                name: name
            },
            select: {
                id: true,
                name: true
            }
        })

        return { category }
    }
}

export { CreateCategoryService }