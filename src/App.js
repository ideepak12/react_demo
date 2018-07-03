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

  deletePersonHandler = (personIndex) => {
    // We can copy array(becoz don't change into original array)
    // in two ways, const persons = this.state.persons;
    // const persons = this.state.persons.slice();
    // OR
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1> Hello World </h1>

        <button
          onClick={this.toogleNameHandler}
          style={style}
        >Toggle Name</button>

        {person}
      </div>
    );
  }
}

export default App;
