const authService = require('./../service/auth');
const jwt = require("jsonwebtoken");

exports.login = async (req , res)=>{
    
   
        let username = req.body.username;
        let password = req.body.password;
    
        if (username && password) {
            try {
                const data = await authService.loginService(username , password);
    
                if (data.Id) {
                    await jwt.sign(
                        {
                            userId: data.Id
                        },
                        process.env.CLIENT_SECRET,
                        (err, token) => {    
                            if (!err) {
                                res.status(200).json({
                                    statusCode : 200,
                                    message: "Login Successfully",
                                    accesstoken:token,
                                    isValid: true
                                });         
                            }
                           
                        }
                    );
                    return
 
                }
            
                res.status(data.statusCode).json(data);
                return;
            } catch (error) {
                console.error(error.message);
            }
          
               
        }

        res.status(422).json({message : "Invalid Parameters"});
   
}

exports.signup = async(req , res)=>{
 
        let name = req.body.name;
        let username = req.body.username;
        let password = req.body.password;

        if (name && username && password) {
            
            try {
                let data = await authService.signupService(username , password , name);
                data = data.toJSON();
                delete data.password;
                res.status(200).json(data); 
            } catch (error) {
                console.error(error.message);
            }
            return;                   
        }

        res.status(422).json({message : "Invalid Parameters"});
   
   
}
