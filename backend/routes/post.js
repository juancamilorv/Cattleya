const express = require("express")
const router = express.Router()

const postController = require("../controllers/post")

router.get("", postController.getPosts);
router.post("", postController.addPosts);

module.exports = router;