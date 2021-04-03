const userService = require('./../service/user');


exports.createPost = async(req ,res)=>{
   let author = req.body.author;
   let title = req.body.title;
   let description = req.body.description;
   let userId = req.userId;

   try {
    const data = await userService.createPostService(author,	title,	description,userId);
    res.status(200).json(data);
   } catch (error) {
     console.error(error.message)
   }
  

}

exports.likePost = async(req , res)=>{

    try {
        let blogId = req.body.blogId;   
        let data = await userService.likeBlogService(blogId , req.userId);
        res.status(200).json(data); 
    } catch (error) {
        console.error(error.message)
    }
}

exports.getProfile = async(req , res)=>{

    try {
        const data = await userService.getProfileService(req.userId)
        if ( typeof(data) !== "undefined" && data !== null ){
            res.status(200).json(data)
        }
        return res.status(200).json("NO DATA AVAILABLE")   
    } catch (error) {
        console.error(error.message)
            
    }

}




