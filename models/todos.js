const todos = []

module.exports = {
    getAll,
    create,
    deleteIt,
  };

  function getAll(){
    return todos
  }

  function create(todo) {
    console.log("TODO DONE", todo)
    todo = {
        name: todo,
        done: false
    }
    todos.push(todo) 
  }

  function deleteIt(delName) {
    let index = todos.indexOf(delName)
    let counter = 0 
    todos.forEach(function(d){

        //Could not get findIndex to work, had to make a jank version 
        if (d.name == `${delName}`) {
            console.log(d, " AND ", delName, " MATCH")
            console.log("COUNTER ", counter)
            return todos.splice(counter, 1)
        } else {
            console.log(d, " AND ", delName, " DOES NOT MATCH")
            console.log("COUNTER ", counter)
        } counter ++
    })

    }
