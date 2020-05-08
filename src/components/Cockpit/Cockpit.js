import React, { useEffect, useContext } from 'react';
import './Cockpit.css';
import AuthContext from '../../context/AuthContext';

const Cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
  });

  const authContext = useContext(AuthContext);

  console.log('[Cockpit.js] authContext:',authContext)

  return(
    <>
    <h1>Person management</h1>
    <button onClick={props.togglePersonsHandler}>Toggle persons</button>
    <button onClick={authContext.login}>Login</button>
    
    </>
  )
}

export default React.memo(Cockpit);
