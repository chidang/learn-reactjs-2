import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 'a1', name: 'Chi', age: 30},
      {id: 'a2', name: 'Khanh', age: 29}
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {showPersons: !doesShow} )
  }

  removePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  nameChangedHanler = (event, personId) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === personId;
    });

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value
    let persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons: persons})
  }

  render () {
    let persons = null

    if (this.state.showPersons){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={(index) => this.removePerson(index)}
                changed={(event) => this.nameChangedHanler(event, person.id)}
                />
            })
          }
        </div>
      )
    } 

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.togglePersonsHandler}>Toggle persons</button>
        {persons}
      </div>
    )
  }
}

export default App;
