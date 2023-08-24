const User = require("../models/users.model")

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

const getFollowingPosts = async (req, res) => {
    const user = await User.findById(req.user._id)
    console.log("user", user)

    const user_following = user.following
    console.log("im following", user_following)

    const following = await User.find({_id : { $in: user_following }} )
    console.log("the people data i follow", following)

    const postsFromFollowedUsers = [];

        for (const followingUser of following) {
            console.log("inner for loop ", followingUser)
            postsFromFollowedUsers.push(...followingUser.posts);
        }

        const search = req.body.search
        
        if(!search === ''){
            
            const posts = await postsFromFollowedUsers.find({ $or: [{author : {$regex :'^search'}}, {genere : {$regex : '^search'}}, {name : {$regex : '^search'}}]})
            res.send(posts);

        }else{
            res.send(postsFromFollowedUsers)
        }

        res.send(posts);
}



module.exports = {createPost, getFollowingPosts}