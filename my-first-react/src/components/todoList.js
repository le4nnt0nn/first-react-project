import React from "react";

const todos = ["Terminar Trabajo", "Estudiar PHP", "Aprender React", "Salir al cine"];

const TodoList = () => (
  <ul>
    {todos.map(task => (
      <li key={task}>{task}</li>
    ))}
  </ul>
);

export default TodoList;