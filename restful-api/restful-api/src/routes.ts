import { Router } from 'express'

import UsersController from './controllers/users-controller'
import PostsController from './controllers/posts-controller'

const routes = Router()

routes.get('/users', UsersController.find)
routes.get('/users/:id', UsersController.findById)
routes.post('/users', UsersController.create)
routes.put('/users/:id', UsersController.update)
routes.delete('/users/:id', UsersController.delete)

routes.get('/posts', PostsController.find)
routes.get('/posts/:id', PostsController.findById)
routes.post('/posts', PostsController.create)
routes.put('/posts/:id', PostsController.update)
routes.delete('/posts/:id', PostsController.delete)

export default routes