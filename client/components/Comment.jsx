import React from 'react';
import {browserHistory} from 'react-router';

export default class Comment extends React.Component {
  render() {
    return (
      <li>
        <h4>{this.props.username}</h4>
        <span className="comment-content">{this.props.content}</span>
        <span className="comment-date">{this.props.date}</span>
      </li>
    )
  }
}
