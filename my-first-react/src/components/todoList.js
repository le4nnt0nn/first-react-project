import React from "react";

const todos = ["Aprender React", "Practicar Visual Basic", "Salir con amigos", "Ver serie de anime"];

const Todo = props => <li onClick={() => props.deleteTodo(props.todo)} style={{paddingTop: "20px"}}>{props.todo}</li>;

const TodoList = props => (
  <ul style={{marginTop: "-10px", marginBottom:"50px", listStyle: "none", textAlign: "center", justifyContent: "center"}}>
    {props.todos.map(todo => (
      <Todo todo={todo} 
      key={todo} 
      deleteTodo={props.deleteTodo}
      />
    ))}
  </ul>

);

export default TodoList;