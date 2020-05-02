import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 'a1', name: 'Chi', age: 32},
      {id: 'a2', name: 'Khanh', age: 31}
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({showPersons: !doesShowPersons});
  }

  removePersonHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  changePersonHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex( p => {
      return personId === p.id;
    })
    const persons = this.state.persons;
    const person = persons[personIndex];
    person.name = event.target.value;
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  render () {
    return (
      <div className='App'>
        <h1>This is my Reactjs App</h1>
        <Cockpit 
          togglePersonsHandler={this.togglePersonsHandler}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          changePersonHandler={(event, index)=> this.changePersonHandler(event, index)}
          removePersonHandler={(index) => this.removePersonHandler(index)}
        />
      </div>
    )
  }
}

export default App;
