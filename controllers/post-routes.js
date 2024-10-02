const router = require('express').Router();
const BlogPost = require('../models/BlogPost');
const Comment = require('../models/Comment');
const withAuth = require('../utils/auth');


// GET a single blog post
router.get('/:id', async (req, res) => {
    // Redirects users to login if not logged in
    try {
        const postData = await BlogPost.findByPk(req.params.id);

        const post = postData.get({ plain: true });

        res.render('post', post)

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;