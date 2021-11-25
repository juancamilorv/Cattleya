const express = require('express');
// const cors = require("cors");
const mongoose = require("mongoose")

const app = express();

const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(cors());

// database connection
mongoose
    .connect(
        "mongodb+srv://cattleyaDBuser:0rZqpzM0CVzO9UST@cluster0.ug0uv.mongodb.net/cattleyaDB?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("We are connected to CatleyaDB");
    })
    .catch(() => {
        console.log("Houston, we have problems");
    }); 

app.use("/post",postRoutes)
app.use("/user",userRoutes)

module.exports = app;