const posts = [
    {
        id: "usuario1@example",
        user: "Juan Tierra",
        name: "67890",
    },
    {
        id: "usuario2@example",
        user: "Juana Materas",
        password: "12345",
    }
]

exports.getUsers = (req, res) => {
    res.status(200).json(posts)
}

exports.addUsers = (req, res) => {
    posts.push(req.body);
    console.log(req.body);
    res.status(201).json("Usuario creado")
}