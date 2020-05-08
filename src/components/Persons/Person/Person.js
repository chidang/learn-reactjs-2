import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Person.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/AuthContext';

class Person extends Component {
  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount(){
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }
  
  render(){
    return (
      <Aux>
        {this.context.isAuth ? <p>Authenticated</p> : <p>Please login</p>}
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          // ref={(inputEl) => {this.inputElement = inputEl;}}
          ref={this.inputElementRef}
        />
      </Aux>
    )
  }

}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default WithClass(Person, 'Person');
