import React from "react";

const todos = ["Aprender React", "Practicar Visual Basic", "Salir con amigos", "Ver serie de anime"];

const Todo = props => <li>{props.todo}</li>;

const TodoList = () => (
  <ul>
    {todos.map(todo => (
      <Todo todo={todo} key={todo} />
    ))}
  </ul>
);

export default TodoList;