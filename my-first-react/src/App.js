import './App.css';
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";

function App() {

  /* constructor */
  constructor(props) {
    super(props);
    this.state = {
      todos: ["Finish homework", "Wash dishes", "Clean room", "Make waffles"],
    };
  }

  return (
    <div className="App">
        <h1>To-Do List</h1>
        <div className="todo-list">
          <TodoList todos={this.state.todos} />
          <TodoForm />
        </div>
        
    </div>
  );
}

export default App;
