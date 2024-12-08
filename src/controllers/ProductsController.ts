import { Request, Response } from 'express'

export class ProductsController {
  /* 
  * index - GET para listar vários registros
  * show - GET para exibir um registro especifico
  * create - POST para criar um registro
  * update - PUT para atualizar um registro
  * remove - DELETE para deletar um registro
  */

  index(request: Request, response: Response) {
    const { page, limit } = request.query

    response.send(`Página ${page} de ${limit}`)
  }

  create(request: Request, response: Response) {
    const { name, price } = request.body

  //response.end(`Produto ${name} custa $ ${price}`)
  response.status(201).json({ name, price, user_id: request.user_id})
  }
}
