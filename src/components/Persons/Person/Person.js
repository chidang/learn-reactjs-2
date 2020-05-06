import React, {Component} from 'react'
import './Person.css'

class Person extends Component {

  constructor(props){
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount(){
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }
  
  render(){
    return (
      <div className="Person">
        <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          // ref={(inputEl) => {this.inputElement = inputEl;}}
          ref={this.inputElementRef}
        />
      </div>
    )
  }

}

export default Person;
