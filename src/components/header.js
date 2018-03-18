import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {
  authButton() {
    if (this.props.authenticated) {
      return <li className="nav-item">
        <Link className="nav-link" to="/signout">Sign Out</Link>
      </li>
    }
    return [
    <li className="nav-item" key={1}>
      <Link className="nav-link" to="/signin">Sign In</Link>
    </li>,
    <li className="nav-item" key={2}>
      <Link className="nav-link" to="/signup">Sign Up</Link>
    </li>
    ]
  }

  resourceMenu() {
    if(this.props.authenticated) {
      return <li className="nav-item">
        <Link className="nav-link" to="/resources"> Resources </Link>
      </li>
    }
  }

  render() {
    return(
      <nav className="navbar navbar-light" >
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/"> HOME</Link>
          </li>
          {this.resourceMenu()}
          {this.authButton()}
        </ul>

       </nav>

    );
  }
}

function mapStateToProps(state) {
  return {authenticated: state.authentication.authenticated};
}

export default connect(mapStateToProps, actions) (Header);
