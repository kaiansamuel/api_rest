import { Router } from 'express'
import { myMiddleware } from '../middlewares/my_middleware'
import { ProductsController } from '../controllers/ProductController'

export const productsRoutes = Router()
const productsController = new ProductsController()

//Parametros não nomeados
//Middleware local em uma rota especifica
productsRoutes.get("/", productsController.index)

productsRoutes.post("/", myMiddleware, productsController.create)