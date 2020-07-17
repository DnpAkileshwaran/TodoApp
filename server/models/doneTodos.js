const mongoose = require('mongoose');

const newSchema = mongoose.Schema;

const DoneTodoSchema = new newSchema({
  doneTodo: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('doneTodos', DoneTodoSchema);
