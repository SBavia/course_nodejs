const Sequelize = require("sequelize");

const sequelize = new Sequelize("course-nodejs", "root", "admin", {
  dialect: "mysql",
  host: "localhost",
  logging: false,
});

module.exports = sequelize;
