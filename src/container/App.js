import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';

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

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }


  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[App.js] getSnapshotBeforeUpdate');
    return {message: 'My snapshot'}
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  } 

  render () {
    console.log('[App.js] render')
    let personsEl  = null;

    if(this.state.showPersons){
      personsEl = <Persons 
        persons={this.state.persons}
        click={(index) => this.removePersonHandler(index)}
        changed={(event, personId) => this.changePersonHandler(event, personId)}
      />
    }
    return (
      <Aux>
        <Cockpit 
          togglePersonsHandler={this.togglePersonsHandler}
        />
        {personsEl}
      </Aux>
    )
  }
}

export default WithClass(App, 'App');
