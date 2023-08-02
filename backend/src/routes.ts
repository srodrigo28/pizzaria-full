import { Router, Request, Response } from 'express';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
    return res.json({ nome: 'Bastião' })
    //    throw new Error('Erro ao fazer essa requisição')
});

export { router };