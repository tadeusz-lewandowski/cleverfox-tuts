import React from 'react';

export default class NewComment extends React.Component {

  render() {
    return (
      <div>
        <input type="text" className="comment-input" placeholder="Write comment"/><button className="comment-button">Comment</button>
      </div>
    )
  }
}
