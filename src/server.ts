import express from "express"

const PORT = 3333

const app = express()
app.use(express.json())   

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
app.get("/products", (request, response) =>{
  const { page, limit } = request.query

  response.send(`Página ${page} de ${limit}`)
})

app.post("/products", (request, response) => {
  const { name, price } = request.body

  //response.end(`Produto ${name} custa $ ${price}`)
  response.status(201).json({ name, price})
})

app.listen(PORT, () => console.log(`Server running at ${PORT}`))


