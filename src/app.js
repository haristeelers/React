import React from "react";
import {Todo} from "./todo.js";

export class App extends React.Component {
  state = {
    value: "",
    todos: [] 
  };

  handleClick() {
    console.log(this.state.value);
    console.log(this.state.todos);
    var temparray = this.state.todos; //makes variable that is equal to todos
    temparray.push(this.state.value);
    this.setState({
      todos: temparray,
      value: ""
    });
  }
  onChange(e) {
    //e is argument that holds the event
    this.setState({
      value: e.target.value //gives value inside input box (the event)
    });
  }

  deleteTodo = index => {
    var tempArray = this.state.todos;
    tempArray.reverse();
    tempArray.splice(index, 1);
    tempArray.reverse();
    this.setState({
      todos: tempArray
    });
  };

  render() {
    return (
      <div>
        <h1>Add your todos</h1>
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.onChange(e, this.todos, this.i)}
        />
        <button onClick={() => this.handleClick()}>add</button>
        {this.state.todos.slice(0).reverse().map((todo,index) => (
          <Todo deleteTodo={this.deleteTodo} state={this.state} 
          todo={todo} index={index} function={console.log(this.state.todos)}
          />
        ))
        }
        </div>
        
    );
  }
}
