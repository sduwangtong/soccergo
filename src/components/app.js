import React, { Component } from 'react';
import Header from './header';
import UserList from './user_lists'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/*Marking sure APP has children from router, app is responsible for showing it */}
        {this.props.children}
        {/*<UserList />*/}
      </div>
    );
  }
}
