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
    posts.push(req.body);
    console.log(req.body);
    res.status(201).json("Post creado")
}