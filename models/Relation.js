const user = require('./user')
const blog = require('./blog')
const likeBlog = require('./likeBlog')

user.hasMany(blog, {
    constraints: true,
    onDelete: "CASCADE"
});

blog.belongsTo(user, {
    constraints: true,
    onDelete: "CASCADE"
});

user.belongsToMany(blog, { through: likeBlog }); //Many to many relation 


blog.hasMany(likeBlog, {
    constraints: true,
    onDelete: "CASCADE"
});