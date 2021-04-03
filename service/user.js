const userModel = require('./../query/user')


exports.createPostService = async(author,	title,	description,userId)=>{

    let createPost = await userModel.createPost(author,	title,	description,userId);
    return createPost;
}

exports.likeBlogService = async(blogId , userId)=>{

    let likeBlog = await userModel.likeBlog(blogId , userId);
    return likeBlog;

}

exports.getProfileService = async(userId)=>{

    let userProfile = await userModel.getprofileById(userId)

    if (userProfile != null){
        delete userProfile.password
    }

    return userProfile
}



