//const { post } = require("../app");
const Post = require("../models/post");

const posts = [
    {
        user: "Juana Materas",
        name: "Abono orgánico",
        category: "Fertilizantes",
        summary: "Abono orgánico a base de estiércol y forraje.",
        images: "",
        price: 50000,
        quantity: 10,
    },
    {
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
    Post.find().then((postResult) => { 
      res.status(200).json(postResult);
    });
};

exports.addPosts = (req, res) => {
    console.log(req.body);
    // in mememory
    //posts.push(req.body);
    const postAdd = new Post({
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

exports.deletePost = (req, res) => {
    Post.deleteOne({ name: req.params.name }) .then((result) => {
      if (result.deletedCount > 0) {
        res.status(200).json({ message: "Post eliminado" });
      } else {
        res.status(200).json({ message: "Post no encontrado" });
      }  
    });
};

exports.updatePost = (req, res) => {
    const id = req.params.id;
    const post = new Post({
        _id: id,
        user: req.body.user,
        name: req.body.name,
        category: req.body.category,
        summary: req.body.summary,
        images: req.body.images,
        price: req.body.price, 
        quantity: req.body.quantity,
        admin: req.body.admin,
    });

    Post.updateOne({ _id: id }, post).then((result) => {
        if (result.modifiedCount > 0) {
            res.status(200).json({ message: "Actualización exitosa" });
          } else {
            res.status(200).json({ message: "Post no encontrado" });
          }
    });
};

