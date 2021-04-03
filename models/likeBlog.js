const Sequelize = require("sequelize");

const sequelize = require("./../helpers/database");


const like = sequelize.define(
    "like",
    {
        Id: {
            type: Sequelize.BIGINT.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    },
    {
        updatedAt: false
       
    }
);

module.exports = like;
