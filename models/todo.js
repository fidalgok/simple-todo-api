let mongoose = require('mongoose');

//configure schema

var todoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Todo cannot be blank'
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});

//Configure Model
var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;