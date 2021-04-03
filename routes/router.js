const Router = require('express').Router();

Router.use('/user' ,require('./user'));
Router.use('/auth' , require('./Auth'));
Router.use('/blog' , require('./blog'));

module.exports = Router;