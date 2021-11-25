const { post } = require("../app");
const Post = require("../models/post");

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

exports.getPosts = (req, res) => {
    res.status(200).json(posts)
}

exports.addPosts = (req, res) => {
    console.log(req.body);
    // in mememory
    //posts.push(req.body);
    const postAdd = new Post({
        id: req.body.id,
        user: req.body.user,
        name: req.body.name,
        category: req.body.category,
        summary: req.body.summary,
        images: req.body.images,
        price: req.body.price, 
        quantity: req.body.quantity,
        admin: req.body.admin, 
    });

    postAdd.save().then((createdPost) => {
        console.log(createdPost);
        res.status(201).json({ message: "Post creado" });
    });
};