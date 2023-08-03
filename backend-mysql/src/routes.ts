import { Router } from 'express'
import multer from 'multer'

import { CreateUserController } from './controllers/user/CreateUserController'
import { ListUserController } from './controllers/user/ListUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from './controllers/user/DetailUserController'
import { isAuthenticated } from './middlewares/isAuthenticated'

import { CreateCategoryController } from './controllers/category/CreateCategoryController'
import { ListCategoryController } from './controllers/category/ListCategoryController'

import { CreateProductController } from './controllers/product/CreateProductController'
import { ListByCategoryController } from './controllers/product/ListByCategoryController'

import { CreateOrderController } from './controllers/order/CreateOrderController'
import { RemoveOrderController } from './controllers/order/RemoveOrderController'
import { AddItemController } from './controllers/order/AddItemController'
import { RemoveItemController } from './controllers/order/RemoveItemController'
import { SendOrderController } from './controllers/order/SendOrderController'
import { ListOrderController } from './controllers/order/ListOrderController'
import { DetailOrderController } from './controllers/order/DetailOrderController'
import { FinishOrderController } from './controllers/order/FinishOrderController'

import uploadConfig from './config/multer'

const router = Router()
const upload = multer(uploadConfig.upload("./tmp"))

//-- Rotas User -- //
router.post('/users', new CreateUserController().handle) // rota de cadastro
router.post('/session', new AuthUserController().handle) // rota de validação
router.get('/me', isAuthenticated, new DetailUserController().handle) // rota de detalhe
router.get('/users', isAuthenticated, new ListUserController().handle)

//-- Rotas Cateogory -- //
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

//-- Rotas Product -- //
router.get('/category/product', isAuthenticated, new ListByCategoryController().hadle)
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

//-- Rotas Order -- //
router.post('/order', isAuthenticated, new CreateOrderController().handle)
router.post('/order/add', isAuthenticated, new AddItemController().handle)

router.delete('/order', isAuthenticated, new RemoveOrderController().handle)
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)

router.put('/order/send', isAuthenticated, new SendOrderController().handle)
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)

router.get('/orders', isAuthenticated, new ListOrderController().handle)
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)

export { router };