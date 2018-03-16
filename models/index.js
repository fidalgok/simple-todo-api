var mongoose = require('mongoose');
mongoose.set('debug', true);

//connect to database
mongoose.connect('mongodb://localhost/react-todo-api');

//configure promise chaining
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");