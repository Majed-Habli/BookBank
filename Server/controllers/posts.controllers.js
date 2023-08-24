const User = require("../models/users.model")
const Book = require("../models/users.model")

const createPost = async (req, res)=>{

try {

    console.log("createPost")
    const {name, author, review, genere} = req.body;

    const user = await User.findById(req.user._id);
    
    const newPost = {name, author, review, genere, count_like: 0}
    
    const updatedUser = await User.updateOne({
        email: req.user.email,
    }, {
        $push: {
            posts: newPost
        }
    }).exec();

    console.log(updatedUser)
    

    res.send(updatedUser);

}catch (error){

        console.error(error);
        res.status(500).send("An error occurred");

    }
}

const likePost = async (req, res) => {
    const post_id = await Book.findById(req.body.id);
    console.log("this is the post id", post_id);
}



module.exports = {createPost, likePost}