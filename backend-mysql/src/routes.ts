import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import { isAuthenticated } from './middlewares/isAuthenticated'

const router = Router();

//Rotas criadas
router.post('/users', new CreateUserController().handle) // rota de cadastro
router.post('/session', new AuthUserController().handle) // rota de validação
router.get('/me', isAuthenticated, new DetailUserController().handle) // rota de detalhe

// router.get('/users', new CreateUserController().handle)

export { router };