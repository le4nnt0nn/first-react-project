import './App.css';
import TodoList from "./components/todoList";

function App() {
  return (
    <div className="App">
        <h1>To-Do List</h1>
        <div className="todo-list">
          <TodoList />
        </div>
        
    </div>
  );
}

export default App;
