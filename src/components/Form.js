import React, { Component } from 'react';

const SERVER = 'http://localhost:7000/'

class Form extends Component {
  constructor (prop) {
    super(prop)
    this.state = {
      value: '',
      qs: ''
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  changeHandler(event) {
    event.preventDefault()
    this.setState({
      value: event.target.value
    });
    fetch(SERVER + event.target.value)
      .then(resp => resp.json())
      .then(resp => this.setState({qs: resp.res}))
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(SERVER + this.state.value)
       .then(resp => resp.json())
      .then(resp => this.setState({qs: resp.res}))
  }

  render () {
    return (
      <div> 
      <form onSubmit={this.handleSubmit}>
        <p> Add a gate to the circuit : </p>
          <input type="text" 
                 name="gate"  
                 value={this.state.value} 
                 onChange={this.changeHandler} 
          />
      </form>
      <p>res: {this.state.qs}</p>
      </div>
    );        
  }
}

export default Form;