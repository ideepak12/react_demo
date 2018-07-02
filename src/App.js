import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "deepak", age: "26" },
      { name: "min", age: "16" },
      { name: "max", age: "20" }
    ],
    otherState: "Some other state"
  }

  switchNameHandler = () => {
    // Don't do this, this.state.persons[0].name = "yadav";
    this.setState( {
      persons: [
        { name: "yadav", age: "26" },
        { name: "min", age: "16" },
        { name: "max", age: "100" }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1> Hello World </h1>

        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> My hobbie: Racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    // OR
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hello World'));
  }
}

export default App;
