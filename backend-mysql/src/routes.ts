import { Router, Request, Response } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController'

const router = Router();

//Rotas criadas
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

// router.get('/users', new CreateUserController().handle)

export { router };