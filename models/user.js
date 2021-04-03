const Sequelize = require("sequelize");

const sequelize = require("./../helpers/database");


const user = sequelize.define(
    "user",
    {
        Id: {
            type: Sequelize.BIGINT.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: Sequelize.STRING(128),
            allowNull: true
        },
        username: {
            type: Sequelize.STRING(128),
            unique: true,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: true
        }
    },
    {
        timestamps: false,
    }
);

module.exports = user;
