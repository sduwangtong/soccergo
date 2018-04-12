import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CommentList extends Component {
  componentDidMount() {
    this.props.fetchMatches();
  }

  errorMessage () {
    return <div>  {this.props.message} </div>;
  }
  render() {
    const list = this.props.comments.map(comment => <li key={comment}> {comment}</li>);
    console.log(this.props.matches);
    const matches = this.props.matches.map(match => <option value={match._id}> {match.name} </option>);
    return (
      <div>
        <ul className="comment-list">
          {list}
          {this.errorMessage()}
        </ul>
        <select>
          {matches}
        </select>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments : state.comments,
    message : state.message,
    matches : state.matches
  };
}

export default connect(mapStateToProps,actions)(CommentList);
