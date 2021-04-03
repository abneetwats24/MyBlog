const blogModel = require('./../query/blog')

exports.getBlogListService = async(offset ,limit)=>{

    let blogList = await blogModel.getBlogs(offset ,limit);
    return blogList;
}



exports.getBlogService = async(blogId,userId)=>{
   
    let getblog = await blogModel.getBlogById(blogId,userId);
    if (getblog != null){
        getblog = getblog.toJSON();
    }   

    let blogLikes = await blogModel.getBlogLike(blogId);
    if (getblog != null){
        getblog["LikesCount"] = blogLikes.length;
    } 
    

    return getblog;

}