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
    otherState: "Some other state",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // Don't do this, this.state.persons[0].name = "yadav";
    this.setState( {
      persons: [
        { name: newName, age: "26" },
        { name: "min", age: "16" },
        { name: "max", age: "100" }
      ]
    } )
  }

  toogleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: "deepak", age: "26" },
        { name: event.target.value, age: "16" },
        { name: "max", age: "200" }
      ]
    } )
  }

  render() {
    // inline style.
    const style= {
      backgroundColor: 'grey',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px'
    };

    let person = null;

    if ( this.state.showPersons ) {
      person = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={() => this.switchNameHandler("xyz")}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "abc")}
            change={this.nameChangedHandler}
          > My hobbie: Racing </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      )
    }

    return (
      <div className="App">
        <h1> Hello World </h1>

        <button
          onClick={() => this.switchNameHandler("Changed!")}
          style={style}
        >Switch Name</button>
        <button
          onClick={this.toogleNameHandler}
          style={style}
        >Toggle Name</button>

        {person}
      </div>
    );
    // OR
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hello World'));
  }
}

export default App;
