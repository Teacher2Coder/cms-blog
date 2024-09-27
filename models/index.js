const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');

BlogPost.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(BlogPost, {
    foreignKey: 'post_id'
});