const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const user = require('../controllers/user');
const post = require('../controllers/post');

const Post = require('../models/post');

module.exports = app => {

    router.get('/api/forum/posts', async (req, res) => {
       await Post.find()
            .exec()
            .then(result => {
                res.status(200).json(result);
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    });

    router.get('/api/forum/categories', async (req, res) => {
       await Post.find()
            .exec()
            .then(result => {
                allCategories = result.map(post => {
                    return post.category
                });
                let tempCategories = new Set(allCategories);
                let categories = Array.from(tempCategories);
                categories = [...categories];
                res.status(200).json(categories)
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    });

    router.get('/api/forum/subjects', async (req, res) => {
       await Post.find()
            .exec()
            .then(result => {
                allSubjects = result.map(post => {
                    return post.subject
                });
                let tempSubjects = new Set(allSubjects);
                let subjects = Array.from(tempSubjects);
                subjects = [...subjects];
                res.status(200).json(subjects)
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    });

    router.get('/api/forum/threads', async (req, res) => {
       await Post.find()
            .exec()
            .then(result => {
                allThreads = result.map(post => {
                    return post.title
                });
                let tempThreads = new Set(allThreads);
                let threads = Array.from(tempThreads);
                threads = [...threads];
                res.status(200).json(threads)
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    });

    router.post('/api/forum/newpost', async (req, res) => {
        const {category, subject, title, comment, author} = req.body;
        const post = await new Post({
            _id: new mongoose.Types.ObjectId(),
            author: author,
            category: category,
            subject: subject,
            title: title,
            comment: comment,
        });
        post.save()
            .then(result => {
                console.log(result);
                res.status(201).json({
                    message: 'Post Created',
                    createdPost: {
                        _id: result._id,
                        author: result.author,
                        category: result.category,
                        subject: result.subject,
                        title: result.title,
                        comment: result.comment,  
                        timestamp: result.timestamp                     
                    }
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    });

    router.delete('/api/forum/:postId', (req, res) => {
        Post.deleteOne({_id: req.params.postId})
            .exec()
            .then(result => {
                res.status(200).json({
                    message: 'Post deleted'
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
    });

    app.use(router);
}
