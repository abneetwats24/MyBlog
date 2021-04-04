const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    process.env.MYSQL_DB, //DB name
    process.env.MYSQL_USER, //DB user
    process.env.MYSQL_PASSWORD, //DB pass
    {
        dialect: 'mysql',
        host: process.env.MYSQL_HOST,
        replication: {
          read: [
            { port: process.env.READ_DB_PORT },
          ],
          write: { port: process.env.WRITE_DB_PORT }
        },
        pool: { // If you want to override the options used for the read/write pool you can do so here
          max: 20,
          idle: 30000
        },
        logging: true,
      }
);

module.exports = sequelize;
