import React, {Component} from 'react';
import SignupFrom from './SignupForm';
import * as actions from '../../actions';
import {connect} from 'react-redux';

class Signup extends Component {
  handleFormSubmit({email, password}) {
    this.props.signupUser({email, password});
  }

  render() {
    return (
      <SignupFrom onSubmit={this.handleFormSubmit.bind(this)} signUpError={this.props.signUpError} />
    );
  }
}

function mapStateToProps(state){
  return {signUpError : state.authentication.error};
}
export default connect(mapStateToProps, actions) (Signup);
