const Sequelize = require("sequelize");

// elephantsql endpoint
const sequelize = new Sequelize(
  "postgres://pxdowepn:xdCIzijsUDxWDyB24q3-aGnf6zfKKqUX@stampy.db.elephantsql.com:5432/pxdowepn"
);

const todo = require("./models/todo")(sequelize, Sequelize);

const db = {
  Sequelize,
  sequelize,
  todo
};

db.sequelize.sync(/*{ force: true }*/);

module.exports = db;
