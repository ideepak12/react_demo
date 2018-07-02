import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: "deepak" },
      { name: "min" },
      { name: "max" }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1> Hello World </h1>

        <button>Switch Name</button>

        <Person name={this.state.person[0].name} />
        <Person name={this.state.person[1].name} > My hobbie: Racing </Person>
        <Person name={this.state.person[2].name} />
      </div>
    );
    // OR
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Hello World'));
  }
}

export default App;
