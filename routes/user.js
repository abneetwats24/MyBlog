const UserRouter = require('express').Router();
const user = require('./../controller/user');
const Auth = require('./../middlewares/Auth');


UserRouter.get('/profile' , Auth , user.getProfile)

module.exports = UserRouter;