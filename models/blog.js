const Sequelize = require("sequelize");

const sequelize = require("./../helpers/database");

const blog = sequelize.define(
    "blog",
    {
        blogId: {
            type: Sequelize.BIGINT.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        author: {
            type: Sequelize.STRING(64),
            allowNull: true
        },
        title: {
            type: Sequelize.STRING(128),
            allowNull: true
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    },
    {
        updatedAt: false
       
    }
);

module.exports = blog;
