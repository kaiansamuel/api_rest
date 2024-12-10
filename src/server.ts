import express from "express"
import { routes } from './routes'
import { Request, Response, NextFunction } from 'express'
import { zodError } from 'zod'

const PORT = 3333

const app = express()
app.use(express.json())  

app.use(routes)
//middleware glogal (aplica para todos abaixo dele)
//app.use(myMiddleware)

//Route params
//app.get("/products/:id", (request, response) => {
//  const { id } = request.params
//
//  response.send(`Produto ${id}`)
//})
app.user((error: any, request: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError){
    return response.status(error.statusCode).json({ message: error.message })
  }
  response.status(500).json({ message: error.message })

  if (error instanceof zodError){
    response.status(500).json({ message: 'Validation error' issues: error.format()})
  }
})


app.listen(PORT, () => console.log(`Server running at ${PORT}`))


