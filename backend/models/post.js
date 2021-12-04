const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    
    user: { type: String, required: true},
    name: { type: String, required: true},
    category: { type: String, required: true},
    summary: { type: String},
    images: { type: String, required: true},
    price: { type: Number, required: true},
    quantity: { type: Number, required: true},
    admin : { type: Boolean},
    
});

module.exports = mongoose.model("Post", postSchema);