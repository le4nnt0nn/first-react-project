import React from "react";

class TodoForm extends React.Component {
  /* constructor */
  constructor(props) {
    super(props);
    this.state = { todoInput: "" };
  }

  /* functions */
  doChange = (event) => {
    this.setState({ todoInput: event.target.value });
  };

  render() {
    return (
      <form>
        <input type="text" placeholder="Add task" 
         value={this.state.todoInput}
         onChange={event => this.doChange(event)}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TodoForm;
