import React from "react";

class TodoForm extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Add task" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TodoForm;