// const { user } = require("../app");
const User = require("../models/user");

const users = []

exports.getUsers = (req, res) => {
    res.status(200).json(users)
}

exports.addUsers = (req, res) => {
    console.log(req.body);
    // in mememory
    //posts.push(req.body);
    const userAdd = new User({

        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        admin: req.body.admin,

    });

    userAdd.save().then((createdUser) => {
        console.log(createdUser);
        res.status(201).json({ message: "Usuario creado" });
    });
};
