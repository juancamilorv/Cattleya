const express = require('express')
const app = express()

const postRoutes = require("./routes/post")
const userRoutes = require("./routes/user")

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/post",postRoutes)
app.use("/user",userRoutes)

module.exports = app;