const Todo = require('../models/todos');

module.exports = addTodo = (req,res) => {
  const newTodo = new Todo({ todo: req.body.todo });
  newTodo
    .save()
    .then( todo => return res.json(todo) )
    .catch( err => return res.status(404).json(err) )
}

module.exports = getTodo = () => {
  Todo
    .find()
    .then( todo => return res.json(todo) )
    .catch( err => return res.status(404).json(err) )
}
