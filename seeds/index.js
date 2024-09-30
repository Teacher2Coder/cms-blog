const sequelize = require('../config/connection');
const { BlogPost, Comment } = require('../models');

const postData = require('./postData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await BlogPost.bulkCreate(postData, {
        individualHooks: true,
        returning: true,
    });

    await Comment.bulkCreate(commentData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
}

seedDatabase();