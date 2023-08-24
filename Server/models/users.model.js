const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    genere: String,
    review: String,
    // image: String,
    count_like: Number
})

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: "Custom: Email is required"
    },
    password: String,
    posts:[bookSchema],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
})

const model = mongoose.model("User", userSchema)
const modelBook = mongoose.model("Book", bookSchema)
module.exports = model, modelBook;