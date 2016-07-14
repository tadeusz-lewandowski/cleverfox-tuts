import React from 'react';
import qwest from 'qwest';
import CommentsList from './CommentsList.jsx';
import NewComment from './NewComment.jsx';
import io from 'socket.io-client';

export default class TutorialDetails extends React.Component {
  constructor(){
    super();
    this.state = {data: []};
  }

  componentDidMount(){
    //console.log(this.props.params.id);
    //console.log("działa wszystko");
    var self = this;

    qwest.get('http://localhost:4000/api/tutorials/' + this.props.params.id)
  	  .then(function(xhr, response) {
        self.setState({ data: response});
	    });

    var socket = io();
    socket.on('newComment ' + this.props.params.id, function(comments){
      var data = self.state.data;
      data.comments = comments;
      self.setState({data : data});
    });
  }

  render() {

    var date = this.state.data.date;
    var dateFormatted;
    if(date != undefined){
      dateFormatted = date.slice(0, 10);
    }

    return (
      <div className="container">

        <div className="tutorial">
          <h1 className="article-title">{ this.state.data.title }</h1>
          <h4 className="article-date">{ dateFormatted } by Tadeusz</h4>
          <article>
            { this.state.data.content }
          </article>
          <hr/>
          <NewComment id={this.state.data._id}/>
          <CommentsList data={this.state.data.comments} />
        </div>

      </div>
    )
  }
}
