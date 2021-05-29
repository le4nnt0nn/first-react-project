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


  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
