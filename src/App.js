import React, { Component } from 'react';
import classes from  './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "deepak", age: "26" },
      { id: '2', name: "min", age: "16" },
      { id: '3', name: "max", age: "20" }
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });

    // Not recommended approach
    // const person = Object.assign({}, this.state.persons[person])
    // OR
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } )
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
    let person = null;
    let btnClasses = '';

    if ( this.state.showPersons ) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              change={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)} />
          })}
        </div>
      );

      btnClasses = classes.Red;
    }

    // let para_classes = ['red', 'bold'];
    const para_classes = [];
    if (this.state.persons.length <= 2) {
      para_classes.push( classes.red ); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      para_classes.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1> Hello World </h1>
        <p className={para_classes.join(' ')}> What a great day dear!!! </p>

        <button
          className={btnClasses}
          onClick={this.toogleNameHandler}
        >Toggle Name</button>

        {person}
      </div>
    );
  }
}

export default App;
