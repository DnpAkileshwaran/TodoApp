const mongoose = require('mongoose');

const newScheme = mongoose.Schema;

const TodoSchema = new newScheme({
  todo: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('todos',TodoSchema) ;
