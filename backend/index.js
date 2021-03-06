// Express module import under express alias
const express = require('express')
// Creating a new instance of express
const app = express()
const port = 3000

const posts = [
    {
        id: 1,
        user: "Juana Materas",
        name: "Abono orgánico",
        category: "Fertilizantes",
        summary: "Abono orgánico a base de estiércol y forraje.",
        images: "",
        price: 50000,
        quantity: 10,
    },
    {
        id: 2,
        user: "Juana Materas",
        name: "Orquídea rosada",
        category: "Plantas ornamentales",
        summary: "Flores de Phalaenopsis, las orquídeas más populares del mundo por su larga y frecuente capacidad de florescencia.",
        images: "",
        price: 30000,
        quantity: 3,
    }
]

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/post/', (req, res) => {
    res.status(200).json(posts)
  })

app.post('/api/post/', (req, res) => {
    posts.push(req.body)
    console.log(req.body);
    res.status(201).json("Post creado")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})  