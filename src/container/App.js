import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/AuthContext';

class App extends Component {
  state = {
    persons: [
      {id: 'a1', name: 'Chi', age: 32},
      {id: 'a2', name: 'Khanh', age: 31}
    ],
    showPersons: false,
    changeCounter: 0,
    loggedIn: false
  }

  togglePersonsHandler = () => {
    const doesShowPersons = this.state.showPersons;
    this.setState({showPersons: !doesShowPersons});
  }

  loginHandler = () => {
    this.setState({loggedIn: true})
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
    this.setState( (prevState, props) =>  {
      return {
          persons: persons,
          changeCounter: prevState.changeCounter + 1
        }
    });
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
        loggedIn={this.state.loggedIn}
      />
    }
    return (
      <AuthContext.Provider value={{isAuth: this.state.loggedIn, login: this.loginHandler}}>
        <Aux>
          <Cockpit 
            togglePersonsHandler={this.togglePersonsHandler}
          />
          {personsEl}
        </Aux>
      </AuthContext.Provider>
    )
  }
}

export default WithClass(App, 'App');
