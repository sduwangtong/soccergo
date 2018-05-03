import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectMatch: '',
      name: ''
   };
    this.handleChange = this.handleChange.bind(this);
    this.getMatchDetails = this.getMatchDetails.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.addToMatch = this.addToMatch.bind(this);
  }
  componentDidMount() {
    this.props.fetchMatches();
  }
  handleChange (e){
    this.setState({
      selectMatch:e.target.value,
      name:this.state.name
    });
  };


  errorMessage () {
    return <div>  {this.props.message} </div>;
  }

 getMatchDetails () {
    const selected = this.state.selectMatch;
    const match = this.props.matches.find(function (obj) { return obj._id === selected; });

    if (match && match.playerNames) {
      return match.playerNames.map(player => <li key={player}>{player}</li>)
    }
    return null;
  }


  handleNameChange (event){
    this.setState({
      selectMatch: this.state.selectMatch,
      name:event.target.value
    });
  };

  addToMatch(event) {
    event.preventDefault();
    this.props.updateMatch(this.state.selectMatch, this.state.name);
  }



  render() {
    const list = this.props.comments.map(comment => <li key={comment}> {comment}</li>);
    const matches = this.props.matches.map(match => <option value={match._id}> {match.name} </option>);

    return (
      <div>
        <ul className="comment-list">
          {list}
          {this.errorMessage()}
        </ul>
        <select
        value={this.state.selectValue}
        onChange={this.handleChange} >
          <option value=''> choose one </option>
          {matches}
        </select>
        <ul>
          { this.getMatchDetails() }
        </ul>
        <form onSubmit={this.addToMatch}>
          <textarea onChange={this.handleNameChange} value={this.state.name} > </textarea>
          <button action="submit">I am in</button>
        </form>
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
