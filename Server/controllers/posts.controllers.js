const User = require("../models/users.model")
const createPost = async (req, res)=>{
    console.log("createPost")
    const {name, author, review, genere} = req.body;

    const user = User.findById(req.user._id);
    
    const newPost = {name, author, review, genere, count_like: 0}
    const updatedUser = User.updateOne({
        email: req.user.email,
    }, {
        $push: {
            posts: newPost
        }
    })

    console.log(updatedUser)
    

    res.send("Verfied")
}



module.exports = {createPost}