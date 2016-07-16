import React from 'react';
import Comment from './Comment.jsx';

export default class CommentsList extends React.Component {

  render() {
    var comments;

    if(this.props.data != undefined){
      comments = this.props.data.map(function(comment) {
        return (
          <Comment key={comment._id} username={comment.username} content={comment.content} />
        );
      });
    }

    return (
      <ul className="comments">
        {comments}
      </ul>
    )

  }
}
