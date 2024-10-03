const router = require('express').Router();
const { BlogPost } = require('../../../models');
const withAuth = require('../../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await BlogPost.create({
            post_title: req.body.postTitle,
            post_author: req.session.user,
            post_date: new Date(),
            post_content: req.body.postContent
        })

        res.status(200).json(postData)

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

module.exports = router;