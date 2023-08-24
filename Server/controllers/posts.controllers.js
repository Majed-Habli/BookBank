const User = require("../models/users.model")

const createPost = async (req, res)=>{

try {

    console.log("createPost")
    const {name, author, review, genere} = req.body;

    const user = await User.findById(req.user._id);
    
    const newPost = {name, author, review, genere, count_like: 0}
    // res.send(newPost)
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



module.exports = {createPost}