import React from 'react';
import qwest from 'qwest';

export default class TutorialDetails extends React.Component {
  constructor(){
    super();
    this.state = {data: []};
  }

  componentDidMount(){
    //console.log(this.props.params.id);
    var self = this;
    qwest.get('http://localhost:4000/api/tutorials/' + this.props.params.id)
  	  .then(function(xhr, response) {
        self.setState({ data: response});
        console.log(response);
	    });
  }

  render() {
    return (
      <div className="container">

        <div className="tutorial">
          <h1 className="article-title">{ this.state.data.title }</h1>
          <h4 className="article-date">{ this.state.data.date } by Tadeusz</h4>
          <article>
            { this.state.data.content }
          </article>
          <hr/>
          <input type="text" className="comment-input" placeholder="Write comment"/><button className="comment-button">Comment</button>
          <ul className="comments">
            <li>
              <h4>sordahon</h4>
              <span className="comment-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
              <span className="comment-date">2016-06-14</span>
            </li>
            <li>
              <h4>user2</h4>
              <span className="comment-content">Quisque sollicitudin, mi sed posuere interdum?</span>
              <span className="comment-date">2016-06-14</span>
            </li>
          </ul>
        </div>

      </div>
    )
  }
}
