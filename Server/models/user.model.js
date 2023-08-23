const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: "Custom: Email is required"
    },
    password: String,
    post:[bookSchema],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
})

const bookSchema = new mangoose.Schema({
    name: String,
    author: String,
    genere: String,
    review: String,
    image: string,
    count_like: int
})

const model = mongoose.model("User", userSchema)
module.exports = model;