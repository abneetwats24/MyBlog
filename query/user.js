const BlogPost = require('./../models/blog')
const LikeBlog = require('./../models/likeBlog')
const User = require('./../models/user');

exports.createPost = async(author,	title,	description,userId)=>{

    let blogPost = await BlogPost.create({
        author : author,
        title : title,
        description : description,
        userId : userId
    });

    return blogPost;
}

exports.likeBlog = async(blogId , userId)=>{
  
    let likeBlog = await LikeBlog.create({
        blogBlogId : blogId,
        userId : userId
    });

    return likeBlog;
}

exports.getprofileById = async(userId)=>{
    let getProfile = await User.findOne({
        attributes:[
            "name" ,
            "username"

        ],
        where:{
            Id : userId,
        }
    });
    return getProfile;
}