import React, {Component} from 'react';
import SiginForm from './SigninForm';
import * as actions from '../../actions';
import {connect} from 'react-redux';

class Signin extends Component {
  handleFormSubmit({email, password}) {
    this.props.signinUser({email,password});
  }

  render() {
    return (
      <SiginForm onSubmit={this.handleFormSubmit.bind(this)} loginError={this.props.loginError} />
    );
  }
}

function mapStateToProps(state){
  return {loginError : state.authentication.error};
}
export default connect(mapStateToProps, actions) (Signin);
