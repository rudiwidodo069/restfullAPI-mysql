const sequelize = require('sequelize');

const db = new sequelize("node_restfullAPI", "root", "", {
    dialect: "mysql"
});

db.sync({});

module.exports = db;