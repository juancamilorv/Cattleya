// const { post } = require("../app");
const Post = require("../models/post");

const posts = []

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