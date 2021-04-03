const express = require('express')
const Router = require('./routes/router')
const app = express()
const dotenv = require("dotenv");
const cors = require("cors");
var path = require('path');
const sequelize = require("./helpers/database");
const bodyParser = require('body-parser') 
dotenv.config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api' , Router)


require("./models/Relation");
sequelize
    .sync({
        alter:false
    })
    .then(() => {
        app.listen(8800, () => {
            console.log("Server is Running!");
        });
    })
    .catch(err => {
        console.error(`Sequelize Error : ${err}`);
    });
