const User = require("../models/users.model")

const getAllUsers = async (req, res)=>{
    const users = await User.find();
    res.send(users)
}

// const getProfile = async (req, res)=>{
//     const user = await User.findById(req.user._id)
//     res.send(user)
// }

const followPeople = async (req, res) =>{
    const user = await User.findById(req.user._id);

    const follow = await User.findById(req.body.id);

    if(!user.following.includes(follow._id)){

        const updatedUser = await user.updateOne(
        {
            $push: {
                following: follow._id
            }
        }).exec();
        console.log("hey inner")

        res.send(updatedUser);
    }else{
        console.log("user already followed")
        const updatedUser = await user.updateOne(
            {
                $pull: {
                    following: follow._id
                }
            }).exec();
    
            res.send(updatedUser);
        console.log("hello out")
    }

}

module.exports = {getAllUsers, followPeople}