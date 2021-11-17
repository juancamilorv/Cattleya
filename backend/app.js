const express = require('express')
const app = express()

const postRoutes = require("./routes/post")

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/post",postRoutes)

module.exports = app;