import './App.css';
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";
import React from "react"

class App extends React.Component {
  /* constructor */
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Aprender React", "Practicar Visual Basic", "Salir con amigos", "Ver serie de anime"],
    };
  }

  /* functions */

  // function that collect a new todo and add it in todos
  addTodo = todo => {
    this.setState(prevState => ({
      todos: [...prevState.todos, todo],
    }));
  };


  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <h2>Plan your Day !</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
