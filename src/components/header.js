import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  authButton() {
    if (this.props.authenticated) {
      return <button onClick={() => this.props.authenticate(false)}>Sign out</button>
    }
    return <button onClick={() => this.props.authenticate(true)}>Sign in</button>
  }

  render() {
    return(
      <nav className="navbar navbar-light" >
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/"> HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources"> Resources </Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
          <li className="nav-item">
            <Link to="/signin"> Signin </Link>
          </li>
        </ul>

       </nav>

    );
  }
}

function mapStateToProps(state) {
  return {authenticated: state.authentication.authenticated};
}

export default connect(mapStateToProps, actions) (Header);
