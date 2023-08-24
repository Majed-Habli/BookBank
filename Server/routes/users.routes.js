const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controllers");

router.get("/", usersController.getAllUsers)
router.post("/follow_people", usersController.followPeople)

module.exports = router;