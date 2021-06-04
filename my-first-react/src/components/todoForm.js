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

  addTodoAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input style={{backgroundColor: "#f3c96c", border: "none", outline: "none", textAlign: "center", justifyContent: "center"}} type="text" placeholder="Add task" 
         value={this.state.todoInput}
         onChange={event => this.doChange(event)}
        />
        <audio className="audio-element">
          <source src="./addTodo.mp3"></source>
        </audio>
        <input style={{backgroundColor: "#f3c96c", border: "none", fontSize: "15px", cursor: "pointer", marginLeft: "10px", textAlign: "center", justifyContent: "center"}} type="submit" value="Submit" onClick={this.addTodoAudio} />
      </form>
    );
  }
}

export default TodoForm;
