import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  constructor() {
    super();
    console.log("constructing");
    this.state = {
      chore: "",
      chores: []
    }
  }

  changeHandler(event){
    this.setState({chore: event.target.value});
    console.log("change", event.target.value);
  }

  addItem() {
    console.log(this.state.chore);
    let listOfChores = this.state.chores;
    listOfChores.push(this.state.chore);
    this.setState({chores: listOfChores})
    console.log(listOfChores);
    this.refs.input.value = " ";
  }

  render() {
    const toDoList = this.state.chores.map (todo => {
      return <li>{todo}</li>
    });
    return (
      <div>
        Welcome. Please enter your todo list. <br />
        You are adding: {this.state.chore} <br />
        <input onChange={(event)=>{this.changeHandler(event);}} type="text" /> 
        <button onClick={()=>{this.addItem()}}>Add</button>
        <ul>{toDoList}</ul>
      </div>
    );
  }
}

export default hot(module)(App);
