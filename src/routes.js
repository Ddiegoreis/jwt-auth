import { Router } from 'express'

import UserContronller from './controller/UserController'
import SessionController from './controller/SessionController'
import TestController from './controller/TestController'

import authMiddleware from './middlewares/auth'

const routes = Router()

routes.post('/users', UserContronller.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.get('/authenticated', TestController.test)

export default routes