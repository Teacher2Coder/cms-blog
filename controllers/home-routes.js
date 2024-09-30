const router = require('express').Router();
const BlogPost = require('../models/BlogPost');
const Comment = require('../models/Comment')
const withAuth = require('../utils/auth');

// Get all Blog posts for home page
router.get('/', async (req, res) => {
    try {
        const blogPostsData = await BlogPost.findAll({})
        
        const plainPosts = blogPostsData.map((posts) => posts.get({ plain: true }));
       
        res.render('homepage', {
            plainPosts,
            loggedIn: req.session.loggedIn,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

// GET a single blog post
router.get('/post/:id', async (req, res) => {
    // Redirects users to login if not logged in
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        try {
            const postData = await BlogPost.findByPk(req.params.id, {
                include: [
                    {
                        model: Comment,
                        attributes: [
                            'id',
                            'author',
                            'content'
                        ]
                    }
                ]
            })

            const plainPost = postData.get({ plain: true })

            res.render('post', { plainPost, loggedIn: req.session.loggedIn })

        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login')
});

module.exports = router;