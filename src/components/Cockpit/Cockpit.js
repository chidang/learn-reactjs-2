import React, { useEffect } from 'react';
import './Cockpit.css';
import AuthContext from '../../context/AuthContext';

const Cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
  });

  return(
    <>
    <h1>Person management</h1>
    <button onClick={props.togglePersonsHandler}>Toggle persons</button>
    <AuthContext.Consumer>
      {(context) => <button onClick={context.login}>Login</button>}
    </AuthContext.Consumer>
    
    </>
  )
}

export default React.memo(Cockpit);
