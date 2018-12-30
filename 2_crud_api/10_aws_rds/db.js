const Sequelize = require("sequelize");

// elephantsql endpoint
// const sequelize = new Sequelize(
//   "postgres://pxdowepn:xdCIzijsUDxWDyB24q3-aGnf6zfKKqUX@stampy.db.elephantsql.com:5432/pxdowepn"
// );

// AWS RDS endpoint
const sequelize = new Sequelize(
  "postgres://loren:loren123@todo-db.cy6ugfsmrhck.us-west-1.rds.amazonaws.com:5432/todo_db"
);

const todo = require("./models/todo")(sequelize, Sequelize);

const db = {
  Sequelize,
  sequelize,
  todo
};

db.sequelize.sync(/*{ force: true }*/);

module.exports = db;
