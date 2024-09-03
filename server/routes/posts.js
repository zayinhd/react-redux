import express from "express";

const router = express.Router();

const posts = [
    { id: 1, title: "Post 1", content: "This is the content of post 1" },
    { id: 2, title: "Post 2", content: "This is the content of post 2" },
    { id: 3, title: "Post 3", content: "This is the content of post 3" },
    { id: 4, title: "Post 4", content: "This is the content of post 4" },
];

router.get("/", (req, res) => {
    res.json(posts);
});

router.get("/:id", (req, res) => {
    const post = posts.find((p) => p.id === parseInt(req.params.id));
    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: "Post not found" });
    }
});

export default router;
