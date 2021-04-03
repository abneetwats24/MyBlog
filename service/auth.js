const authModel = require('./../query/auth')
const bcrypt = require("bcryptjs");

exports.loginService =async (username , password)=>{
 
    const checkUserExist = await authModel.checkUser(username)

    if (!checkUserExist) {
        return {statusCode : 404 ,
            message: "Username Not Found"
        };
    }
    
    let passwordValid = bcrypt.compareSync(
        password,
        checkUserExist.password
    );


    if (!passwordValid) {
        return {statusCode : 422 ,
            message: "Please check Password again"
        };
    }
    return checkUserExist;
}


exports.signupService = async(username , password , name)=>{
   
    let epassword = await bcrypt.hashSync(password, 10); //salt-round

    const checkUserExist = await authModel.checkUser(username)

    if (checkUserExist) {
        return {statusCode : 400 ,message: "Username already Exist! Please try Log In!"};
    }

    return authModel.createUser(name, username , epassword)

}