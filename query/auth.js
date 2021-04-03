const User = require('./../models/user');

exports.checkUser = async (username) => {
    let user = await User.findOne({
        where : {
            username : username,
        }
    })
    return user;
}

exports.createUser = async(name,username , epassword)=>{
   
    let user = await User.create({
        name : name,
        username : username,
        password : epassword
    });

    return user;
}
