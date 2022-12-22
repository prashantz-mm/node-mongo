const express = require('express');
const PostModel = require('../models/PostModel');

const router = express.Router();


router.get('/', async (req, res) => {
    const posts = await PostModel.find();
    res.send(posts);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const posts = await PostModel.find({ _id: id });
    res.send(posts);

});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const removed = await PostModel.remove({ _id: id });
    res.send(removed);
});

router.put('/:id', async (req, res) => {
    // const { title, description, likes } = req.body;
    const postUpdated = await PostModel.updateOne({ _id: req.params.id }, { $set: { ...req.body } });
    res.send(postUpdated);

    // console.log("Bodyx:", req.body);
    // const p = Post.
});

router.post('/', async (req, res) => {
    const { title, description, likes } = req.body;

    const post = new PostModel({
        title,
        description,
        likes
    });


    const postCreated = await post.save();

    res.send(postCreated);

    // console.log("Bodyx:", req.body);
    // const p = Post.
});



module.exports = router;