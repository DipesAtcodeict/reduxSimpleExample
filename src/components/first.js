import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getName} from '../actions/nameAction';

class Form extends Component {

    state = {
        firstname: 'John',
        lastname: 'Doe'
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        //call action

        this.props.getName({
          firstname: this.state.firstname,
          lastname: this.state.lastname
        })
    }

  render() {
    return (
      <div>
        <h1>Tell me about yourself!</h1>
        <form onSubmit={this.onSubmit}>
            <div>
               <label>Firstname: </label><br/>
               <input type = "text" name="firstname" onChange={this.handleChange} value={this.state.firstname}/>
            </div> 

            <div>
               <label>Lastname: </label><br/>
               <input type = "text" name="lastname" onChange={this.handleChange} value={this.state.lastname}/>
            </div> 

            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  getName: PropTypes.func.isRequired
}

export default connect(null,{getName})(Form);
