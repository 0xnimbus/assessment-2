const Todo = require("../models/todos");

module.exports = {
    index,
    create,
    delete: deleteOne,
}

function index(req, res) {
    res.render("index", {
        todos: Todo.getAll()
    })
}

function create(req, res) {

    console.log("CREATE REQ BODY TODO IS ", req.body.todo)

    Todo.create(req.body.todo)
    res.redirect("/")
}

function deleteOne(req, res) {

    console.log("DELETE REQUEST FOR TODO", req.body)
    
    let arr = req.body
    let delName = arr.Name

    console.log("DELLL" , delName)

    Todo.deleteIt(delName)

    res.redirect('/')
}