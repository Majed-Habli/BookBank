const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.controllers");

router.post("/", postsController.createPost)
router.get("/get_following_posts", postsController.getFollowingPosts)

module.exports = router;