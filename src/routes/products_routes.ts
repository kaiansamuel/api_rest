import { Router } from 'express'
import { myMiddleware } from '../middlewares/my_middleware'

export const productsRoutes = Router()


//Parametros não nomeados
//Middleware local em uma rota especifica
productsRoutes.get("/", myMiddleware,(request, response) =>{
  const { page, limit } = request.query

  response.send(`Página ${page} de ${limit}`)
})

productsRoutes.post("/", (request, response) => {
  const { name, price } = request.body

  //response.end(`Produto ${name} custa $ ${price}`)
  response.status(201).json({ name, price, user_id: request.user_id})
})