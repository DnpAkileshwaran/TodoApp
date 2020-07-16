const express = require('express');
const router = express.Router();
const Todo = require('../../models/todos');

router.get('/',(req,res) => {
  Todo
    .find()
    .then( todo => res.json(todo) )
    .catch( err => res.status(404).json(err) )
})

router.post('/', (req,res) => {
  const newTodo = new Todo({ todo: req.body.todo });
  newTodo
    .save()
    .then( todo => res.json(todo) )
    .catch( err => res.status(404).json(err) )
})

router.delete('/:id', (req,res) => {
  Todo
    .findById(req.params.id)
    .then( todo => todo.remove().then(() => res.json({success:true})))
    .catch( err => res.status(404).json({success:false}) )
})

module.exports = router;
