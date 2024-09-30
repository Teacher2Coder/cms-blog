const router = require('express').Router();
const { BlogPost } = require('../../../models');

router.get('/', async (req, res) => {
    try {
        const data = await BlogPost.findAll()
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const data = await BlogPost.findOne({ where: { id: req.params.id } })
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;