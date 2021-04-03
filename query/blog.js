const BlogPost = require('./../models/blog')
const LikeBlog = require('./../models/likeBlog')

exports.getBlogs = async(offset ,limit)=>{

    let blogList = await BlogPost.findAll({
        offset: parseInt(offset),
        limit: parseInt(limit),
    });

    return blogList;

}

exports.getBlogLike = async(blogId)=>{

    let blogLike = await LikeBlog.findAll({
        where : {
            blogBlogId : blogId,
        }
    });
    return blogLike;
}

exports.getBlogById = async(blogid,userId)=>{

    let getBlog = await BlogPost.findOne({
        where:{
            blogId : blogid,

        },
        include : [{
            model :LikeBlog,
            required:false,
            where : {
                userId : userId
            }
        }]
    });

    return getBlog;
}