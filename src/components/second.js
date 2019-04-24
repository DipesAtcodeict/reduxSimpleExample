import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getName} from '../actions/nameAction';

import React,{ Component } from 'react';

class Second extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.firstname} {this.props.lastname}</h1>
      </div>
    )
  }
}

Second.proptype = {
  getname: PropTypes.func.isRequired,
  firstname: PropTypes.isRequired,
  lastname: PropTypes.isRequired
}

const mapStateToProps = state => ({
  firstname : state.name.firstname,
  lastname : state.name.lastname
})

export default connect(mapStateToProps, {getName})(Second);
