const db = require("../db.js");

module.exports.deleteTodo = (event, context, callback) => {
  const todo_id = event.pathParameters.id;
  db.todo.destroy({ where: { completed: false } }).then(num_deleted => {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        num_deleted: num_deleted
      })
    });
  });
};
