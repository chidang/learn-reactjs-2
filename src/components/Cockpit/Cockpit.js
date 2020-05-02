import React from 'react';
import './Cockpit.css';
import Persons from '../Persons/Persons';

const Cockpit = (props) => {
    let personsEl  = null

    if(props.showPersons){
      personsEl = <Persons 
        persons={props.persons}
        click={(index) => props.removePersonHandler(index)}
        changed={(event, personId) => props.changePersonHandler(event, personId)}
      />
    }

  return(
    <div>
      <button onClick={props.togglePersonsHandler}>Toggle persons</button>
      {personsEl}
    </div>
  )
}

export default Cockpit;
