import React from "react";

const todos = ["Terminar Trabajo", "Estudiar PHP", "Aprender React", "Salir al cine"];

const Todo = props => <li>{props.todo}</li>;

const TodoList = () => (
  <ul>
    {todos.map(todo => (
      <Todo todo={todo} key={todo} />
    ))}
  </ul>
);

export default TodoList;