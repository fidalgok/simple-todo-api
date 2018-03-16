let express = require('express'),
    router = express.Router(),
    db = require('../models');

//set up index route
//get all todos

router.get('/', (req, res) => {
    db.Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.send(err));
});

//Post route to create todos

router.post('/', (req, res) => {
    db.Todo.create(req.body)
        .then(newTodo => (res.status(201).json(newTodo)))
        .catch(err => res.redirect('back'))
});

//get a single todo
router.get('/:todoId', (req, res) => {
    db.Todo.findById(req.params.todoId)
        .then(todo => res.json(todo))
        .catch(err => res.send(err));
});

//Update Route
router.put('/:todoId', (req, res) => {
    db.Todo.findByIdAndUpdate(req.params.todoId, req.body, {new:true})
        .then(todo => res.json(todo))
        .catch(err => res.send(err));
});

//Delete Route

router.delete('/:todoId', (req, res) => {
    db.Todo.findByIdAndRemove(req.params.todoId)
        .then(() => res.json({message: "deleted todo!"}))
        .catch(err => res.send(err));
});

module.exports = router;