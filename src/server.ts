import express from "express"
import { myMiddleware } from './middlewares/my_middleware'

const PORT = 3333

const app = express()
app.use(express.json())  

//middleware glogal (aplica para todos abaixo dele)
//app.use(myMiddleware)

app.get("/", (request, response) => {
  response.end("Hello World Express")
})

//Route params
//app.get("/products/:id", (request, response) => {
//  const { id } = request.params
//
//  response.send(`Produto ${id}`)
//})

//Parametros não nomeados
//Middleware local em uma rota especifica
app.get("/products", myMiddleware,(request, response) =>{
  const { page, limit } = request.query

  response.send(`Página ${page} de ${limit}`)
})

app.post("/products", (request, response) => {
  const { name, price } = request.body

  //response.end(`Produto ${name} custa $ ${price}`)
  response.status(201).json({ name, price})
})

app.listen(PORT, () => console.log(`Server running at ${PORT}`))


