const express = require('express');
const router = express.Router();
const DoneTodo = require('../../models/doneTodos');

router.get('/', (req,res) => {
  DoneTodo
    .find()
    .then( doneTodo => res.json(doneTodo) )
    .catch( err => res.status(404).json(err) )
});

router.post('/', (req,res) => {
  const newDoneTodo = new DoneTodo({ doneTodo: req.body.doneTodo });
  newDoneTodo
    .save()
    .then( doneTodo => res.json(doneTodo) )
    .catch( err => res.status(404).json(err) )
});

router.delete('/:id', (req,res) => {
  DoneTodo
    .findById(req.params.id)
    .then( doneTodo => doneTodo.remove( () => res.json({success: true}) ) )
    .catch( err => res.status(404).json({success:false}) )
})

module.exports = router;
