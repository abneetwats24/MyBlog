const blogRouter = require('express').Router();
const blog = require('./../controller/blog');
const Auth = require('./../middlewares/Auth');
const user = require('./../controller/user');

blogRouter.get('/' , blog.getBlogList);
blogRouter.get('/:blogId', Auth ,blog.getBlog);
blogRouter.post('/', Auth , user.createPost);
blogRouter.post('/like', Auth , user.likePost);



module.exports = blogRouter;