const AuthRouter = require('express').Router();
const auth = require('./../controller/auth');

AuthRouter.post('/login' , auth.login);
AuthRouter.post('/signup' , auth.signup);

module.exports = AuthRouter;