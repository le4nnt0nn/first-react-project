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

  // This function add the new todo to the list every submit
  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.todoInput);
  };

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input style={{backgroundColor: "lightblue", border: "none", outline: "none"}} type="text" placeholder="Add task" 
         value={this.state.todoInput}
         onChange={event => this.doChange(event)}
        />
        <input style={{backgroundColor: "lightblue", border: "none", fontSize: "15px", cursor: "pointer", marginLeft: "10px"}} type="submit" value="Submit" />
      </form>
    );
  }
}

export default TodoForm;
