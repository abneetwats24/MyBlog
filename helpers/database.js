const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.MYSQL_DB, //DB name
    process.env.MYSQL_USER, //DB user
    process.env.MYSQL_PASSWORD, //DB pass
    {
        dialect: "mysql",
        host: process.env.MYSQL_HOST,
        logging: true,
    }
);

module.exports = sequelize;
