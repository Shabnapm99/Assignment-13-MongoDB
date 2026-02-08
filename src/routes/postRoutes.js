import express, { Router } from "express";
import PostModel from '../model/postModel.js';

const router = Router();
router.use(express.json());

//Retrieve posts using GET

router.get('/getPosts', async (req, res) => {
    try {
        const posts = await PostModel.find({}).select('-__v');
        res.status(200).json({ posts });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong while fetching data",
            error: error.message
        })
    }
});

//get a post

router.get('/getPosts/:id', async (req, res) => {
    try {
        let id = req.params.id;
        const post = await PostModel.findById(id).select('-__v');
        res.status(200).json({ post });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong while fetching data",
            error: error.message
        })
    }
});

//Create new post with POST

router.post('/addPosts', async (req, res) => {

    try {
        let post = req.body;
        await PostModel.create(post);
        res.status(201).json({
            message: "Post created successfully",
            posts: await PostModel.find({}).select('-__v')//if we dont want any of info/field to be fetch from DB
        })
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});

//Delete a post using DELETE

router.delete('/delPosts/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let post = await PostModel.findByIdAndDelete(id);
        res.status(200).json({ message: "post deleted successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});

//Update a Post using PATCH

router.patch('/post/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let updatedPost = await PostModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({
            message: "Post updated successfully",
            updatedPost
        });

    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});



export default router;