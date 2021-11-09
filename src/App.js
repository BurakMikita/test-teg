import React,  from "react";
import "./App.css";
import  jsonSapros from './tegi.json'

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todosTwo, prevTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  React.useEffect(() => {
    const json = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(json);
    if (loadedTodos.length) {
      setTodos(loadedTodos);
    }
    else {
      setTodos(jsonSapros)
    }

  }, []);

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);






  function handleSubmit(e) {
    e.preventDefault();
    if(!todo){
      return null
    }
    prevTodos(todos)
    const split = todo.split( ' ')
    const slovo = split.filter(e=>e.indexOf('#') === 0).join('')
    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      teg:slovo
    };

    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        debugger
        if (editingText === ''){
           setEditingText(todo.text)
          return todo;

        }
        todo.text = editingText;
        const split = todo.text.split( ' ')
        todo.teg = split.filter(e=>e.indexOf('#') === 0).join('')
      }

      return todo;
    });

    setTodos(updatedTodos);
    setTodoEditing(null);
    setEditingText('')

  }

  const searchSubmit =(e)=>{
 e.preventDefault()
    prevTodos(todos)
    let updatedTodos = todos.filter(e=> e.teg === todo )
      if (updatedTodos.length){
        setTodos(updatedTodos)
      }




    }


    const spanSearch= (e)=> {

      setTodo(e.target.innerText)
      searchSubmit(e)
    }
  function backSubmit() {
    setTodos(todosTwo)
  }

  return (
      <div id="todo-list">
        <h1>Заменки</h1>
        <form >
          <button style={{marginRight: '5px'}} onClick={backSubmit}>back</button>
          <input
              type="text"
              onChange={(e) => setTodo(e.target.value)}
              value={todo}
          />
          <button onClick={handleSubmit}>Add Todo</button>
          <button style={{marginLeft:"5px"}} onClick={searchSubmit}>Serch teg#</button>

        </form>
        {todos.map((todo) => (
            <div key={todo.id} className="todo">
              <div className="todo-text">
                <input
                    type="checkbox"
                    id="completed"
                    onChange={() => toggleComplete(todo.id)}
                />
                {todo.id === todoEditing ? (
                    <input
                        value={editingText?editingText:todo.text }
                        type="text"
                        onChange={(e) =>setEditingText(e.target.value)}

                    />
                ) : (
                    <div>{todo.text}</div>
                )}
              </div>
              <div className="todo-actions">
                {todo.id === todoEditing ? (
                    <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
                ) : (
                    <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
                )}

                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
              <span onClick={spanSearch}>{todo.teg}</span>
            </div>
        ))}
      </div>
  );
};

export default App;
