const blogService = require('./../service/blog');

exports.getBlogList = async(req , res)=>{

    if (req.query.offset && req.query.limit) {
        let offset = req.query.offset;
        let limit = req.query.limit;
    
        try {
            let data = await blogService.getBlogListService(offset ,limit );
            res.status(200).json(data);
        } catch (error) {
            console.error(error.message)
        }
     
        return
    }
    res.status(422).json({message : "Invalid Parameters"});
   

}

exports.getBlog = async(req , res)=>{
    if (req.params.blogId) {
        let blogId = req.params.blogId;

        let data = await blogService.getBlogService(blogId,req.userId);
        if (data != null){
            res.status(200).json(data);
        }
        return res.json({message : "NO DATA AVAILABLE"});
    }
  
    res.json({message : "Invalid Parameters"});
    
}