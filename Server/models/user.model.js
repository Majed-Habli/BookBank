const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        require: "Custom: Email is required"
    },
    password: String,
    post:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Books"
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
})

const model = mongoose.model("User", userSchema)
module.exports = model;