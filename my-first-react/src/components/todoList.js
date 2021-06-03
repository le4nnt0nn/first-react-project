import React from "react";

const todos = ["Aprender React", "Practicar Visual Basic", "Salir con amigos", "Ver serie de anime"];

const Todo = props => <li onClick={() => props.deleteTodo(props.todo)} style={{padding: "10px 0 10px", cursor:"pointer"}}>{props.todo}</li>;

const TodoList = props => (
  <ul style={{margin: "auto", listStyle: "none", textAlign: "center", justifyContent: "center",  padding: "initial"}}>
    {props.todos.map(todo => (
      <Todo todo={todo} 
      key={todo} 
      deleteTodo={props.deleteTodo}
      />
    ))}
  </ul>

);

export default TodoList;