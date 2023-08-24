const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.controllers");

router.post("/", postsController.createPost)

module.exports = router;