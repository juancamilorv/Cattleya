const express = require("express")
const router = express.Router()

const postController = require("../controllers/post")

router.get("", postController.getPosts);
router.post("", postController.addPosts);
router.delete("/:name", postController.deletePost);
router.put("/:id", postController.updatePost);

module.exports = router;