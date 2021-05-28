import './App.css';
import TodoList from "./components/todoList";
import TodoForm from "./components/todoForm";

function App() {
  return (
    <div className="App">
        <h1>To-Do List</h1>
        <div className="todo-list">
          <TodoList />
          <TodoForm />
        </div>

    </div>
  );
}

export default App;
