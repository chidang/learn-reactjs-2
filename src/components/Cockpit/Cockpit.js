import React, { useEffect } from 'react';
import './Cockpit.css';

const Cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
  });

  return(
    <>
    <h1>Person management</h1>
    <button onClick={props.togglePersonsHandler}>Toggle persons</button>
    </>
  )
}

export default React.memo(Cockpit);
