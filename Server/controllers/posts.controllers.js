const User = require("../models/users.model");

const createPost = async (req, res) => {
  try {
    console.log("createPost");
    const { name, author, review, genere } = req.body;

    const user = await User.findById(req.user._id);

    const newPost = { name, author, review, genere, count_like: 0 };

    const updatedUser = await User.updateOne(
      {
        email: req.user.email,
      },
      {
        $push: {
          posts: newPost,
        },
      }
    ).exec();

    console.log(updatedUser);

    res.send(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred");
  }
};

const getFollowingPosts = async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log("user", user);

  const user_following = user.following;
  console.log("im following", user_following);

  const following = await User.find({ _id: { $in: user_following } });
  console.log("the people data i follow", following);

  const postsFromFollowedUsers = [];

  for (const followingUser of following) {
    console.log("inner for loop ", followingUser);
    postsFromFollowedUsers.push(...followingUser.posts);
  }

  const search = req.body.search;

  if (!search === "") {
    const posts = await postsFromFollowedUsers.find({
      $or: [
        { author: { $regex: "^search" } },
        { genere: { $regex: "^search" } },
        { name: { $regex: "^search" } },
      ],
    });
    res.send(posts);
  } else {
    res.send(postsFromFollowedUsers);
  }

  res.send(posts);
};
//gave up on this one
const likePost = async (req, res) => {
  // const user = await User.findById(req.user._id);

  // const usersFollowing = user.following;

  // const userFollowingObjects = await User.find({
  //   _id: { $in: usersFollowing },
  // });

  // const userWithBook = userFollowingObjects.find((userObject) => {
  //   const posts = userObject.posts;
  //   return posts.find((post) => post.id === req.body.id);
  // });

  // if (!userWithBook) {
  //   res.status(404).send({ message: "Not found" });
  // }

  // const postToBeUpdated = userWithBook.posts.find(
  //   (post) => post.id === req.body.id
  // );

  // const alreadyLikedPost = postToBeUpdated.likedUsers.find(
  //   (user) => user.id === req.user._id
  // );

  // // put the id
  // const updatedLikedUsers = alreadyLikedPost
  //   ? postToBeUpdated.likedUsers.filter((user) => user !== req.user._id)
  //   : [...postToBeUpdated.likedUsers, {}];

  // // final step is update
  // res.send("kkkk");
  // return;

  res.send("hi");
  return;

  // const following = await User.find({ _id: { $in: user_following } });
  // console.log("the people data i follow", following);

  // const postsFromFollowedUsers = [];

  // for (const followingUser of following) {
  //   console.log("inner for loop ", followingUser);
  //   postsFromFollowedUsers.push(...followingUser.posts);
  // }

  // const liked = req.body.liked;

  // if (!liked === 0) {
  //   liked === 0;
  //   const posts = await postsFromFollowedUsers.update({
  //     $set: { count_like: liked },
  //   });
  //   // const posts = postsFromFollowedUsers.map(item => item)

  //   res.send(posts);
  // } else {
  //   liked === 1;
  //   res.send(posts);
  //   for (const post of postsFromFollowedUsers) {
  //     const posts = await post.updateOne({ $set: { count_like: liked } });
  //   }
  // }
};

module.exports = { createPost, getFollowingPosts, likePost };
