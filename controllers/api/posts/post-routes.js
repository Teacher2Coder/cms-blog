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
        });

        res.status(200).json(postData)

    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await BlogPost.update({
            post_title: req.body.newPostTitle,
            post_content: req.body.newPostContent
        },
        {
            where: { id: req.params.id }
        })
        res.status(200).json(updatedPost);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const deletedPost = await BlogPost.destroy({ where: { id: req.params.id }});
        res.status(200).json(deletedPost);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


module.exports = router;