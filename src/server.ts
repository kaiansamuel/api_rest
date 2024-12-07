import express from "express"
import { routes } from './routes'

const PORT = 3333

const app = express()
app.use(express.json())  

app.use(routes)
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



app.listen(PORT, () => console.log(`Server running at ${PORT}`))


