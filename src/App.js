import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello World </h1>

        <Person name="deepak" />
        <Person name="max"> My hobbie: Racing </Person>
        <Person name="min" />
      </div>
    );
    // OR
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hello World'));
  }
}

export default App;
