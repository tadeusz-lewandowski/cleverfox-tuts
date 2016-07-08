import React from 'react';
import qwest from 'qwest';

export default class NewComment extends React.Component {

  render() {
    return (
      <div>
        <input id='comment-input' type="text" className="comment-input" placeholder="Write comment"/><button className="comment-button" onClick={this.clickFunction.bind(this)}>Comment</button>
      </div>
    )
  }

  clickFunction(){
    var self = this;
    console.log(this.props.id);
    var input = document.getElementById('comment-input');
    console.log(input.value);
    if(input.value != '' && input.value != undefined){
      qwest.post('http://localhost:4000/api/comments', {
        id: self.props.id,
        content: input.value
      })
      .then(function(xhr, response) {
        console.log(response);
      })
      .catch(function(e, xhr, response) {
        console.log(e);
      });
    }

  }
}
